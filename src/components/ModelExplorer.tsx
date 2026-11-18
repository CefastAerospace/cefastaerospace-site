import { useCallback, useEffect, useRef, useState } from 'react';
import { Maximize2, Pause, Play, RotateCcw, Sparkles } from 'lucide-react';
import { fcp01Parts, type Fcp01Part } from '../data/fcp01Parts';
import './ModelExplorer.css';

// Viewer three.js do FCP-01: cada nó do GLB é uma peça (nome = id em
// fcp01Parts). Clique seleciona; a vista explodida afasta as peças a partir
// do centro, mantendo a estrutura parada.
type ViewerApi = {
  setSelected: (_id: string | null) => void;
  setExploded: (_on: boolean) => void;
  setAutoRotate: (_on: boolean) => void;
  resetView: () => void;
  dispose: () => void;
};

const MODEL_URL = `${import.meta.env.BASE_URL}models/fcp-01-explorar.glb`;
const DRACO_PATH = `${import.meta.env.BASE_URL}models/draco/`;
// Distância entre peças na vista explodida (mm). O leque é distribuído de
// forma simétrica em torno do centro do modelo.
const EXPLODE_SPACING = 74;

export default function ModelExplorer() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<ViewerApi | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [exploded, setExploded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const [THREE, { GLTFLoader }, { DRACOLoader }, { OrbitControls }, { RoomEnvironment }] =
        await Promise.all([
          import('three'),
          import('three/examples/jsm/loaders/GLTFLoader.js'),
          import('three/examples/jsm/loaders/DRACOLoader.js'),
          import('three/examples/jsm/controls/OrbitControls.js'),
          import('three/examples/jsm/environments/RoomEnvironment.js'),
        ]);
      if (cancelled) return;

      const scene = new THREE.Scene();
      const width = host.clientWidth || 640;
      const height = host.clientHeight || 480;
      const camera = new THREE.PerspectiveCamera(34, width / height, 1, 4000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.62;
      host.appendChild(renderer.domElement);
      renderer.domElement.className = 'model-explorer-canvas';

      // Ambiente neutro gerado na hora (sem HDR externo): dá reflexo ao metal.
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      scene.environmentIntensity = 0.25;

      scene.add(new THREE.HemisphereLight(0xcfe6ff, 0x0a1a29, 0.4));
      const key = new THREE.DirectionalLight(0xffffff, 1.05);
      key.position.set(220, 320, 260);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x9fd6ff, 0.35);
      fill.position.set(-260, -120, -180);
      scene.add(fill);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minDistance = 140;
      controls.maxDistance = 1500;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.9;
      controls.target.set(0, 0, 0);

      // Modelo em milímetros: recentraliza e deixa o pivô no centro geométrico.
      const pivot = new THREE.Group();
      scene.add(pivot);

      const loader = new GLTFLoader();
      const draco = new DRACOLoader();
      draco.setDecoderPath(DRACO_PATH);
      loader.setDRACOLoader(draco);

      const parts: {
        id: string;
        object: import('three').Mesh;
        offset: import('three').Vector3;
        centreY: number;
        movable: boolean;
        shell: boolean;
      }[] = [];
      let currentExplode = 0;
      let targetExplode = 0;
      let selectedId: string | null = null;
      let disposed = false;
      let fitDistance = 600;
      let refit = false;
      const fitDir = new THREE.Vector3(0.62, 0.42, 0.75).normalize();
      const boxScratch = new THREE.Box3();
      const offset = new THREE.Vector3();

      // Distância de câmera que enquadra a caixa *na orientação atual*: projeta
      // os oito cantos no espaço da câmera e resolve a condição de frustum
      // (|x| <= z·tanH, |y| <= z·tanV) para cada um. Exato — nada de
      // multiplicador chutado, e já considera o aspecto da tela.
      const fitDistanceFor = (b: import('three').Box3, margin = 1.08) => {
        const vTan = Math.tan((camera.fov * Math.PI) / 360);
        const hTan = vTan * camera.aspect;
        const inv = camera.quaternion.clone().invert();
        const corner = new THREE.Vector3();
        let needed = 0;
        for (let i = 0; i < 8; i += 1) {
          corner
            .set(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z)
            .sub(controls.target)
            .applyQuaternion(inv);
          // Em espaço de câmera a visão é -Z: a profundidade de um canto é -z.
          const along = -corner.z;
          const halfSpan = Math.max(Math.abs(corner.x) / hTan, Math.abs(corner.y) / vTan);
          needed = Math.max(needed, along + halfSpan * margin);
        }
        return Math.max(needed, 10);
      };

      const partsBox = (target: import('three').Box3) => {
        target.makeEmpty();
        for (const part of parts) {
          part.object.updateWorldMatrix(true, false);
          target.expandByObject(part.object);
        }
        return target;
      };

      const applySelection = () => {
        for (const part of parts) {
          const mat = part.object.material as import('three').MeshStandardMaterial;
          const isSelected = part.id === selectedId;
          // Realce na própria cor da peça (um emissive azul genérico puxava o
          // matiz para lavanda).
          mat.emissive.copy(mat.color);
          mat.emissiveIntensity = isSelected ? 0.45 : 0;
        }
      };

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      let downX = 0;
      let downY = 0;

      const pick = (clientX: number, clientY: number) => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(pivot.children, true);
        const hit = hits.find((h) => (h.object as import('three').Mesh).isMesh);
        const id = hit ? hit.object.name : null;
        selectedId = id || null;
        applySelection();
        setSelected(selectedId);
      };

      const onPointerDown = (e: PointerEvent) => {
        downX = e.clientX;
        downY = e.clientY;
      };
      const onPointerUp = (e: PointerEvent) => {
        if (Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) return;
        pick(e.clientX, e.clientY);
      };
      const onPointerLeave = () => { renderer.domElement.style.cursor = ''; };
      const onPointerMove = (e: PointerEvent) => {
        renderer.domElement.style.cursor = 'grab';
        void e;
      };
      renderer.domElement.addEventListener('pointerdown', onPointerDown);
      renderer.domElement.addEventListener('pointerup', onPointerUp);
      renderer.domElement.addEventListener('pointerleave', onPointerLeave);
      renderer.domElement.addEventListener('pointermove', onPointerMove);

      loader.load(
        MODEL_URL,
        (gltf) => {
          if (cancelled) return;
          pivot.add(gltf.scene);

          const box = new THREE.Box3().setFromObject(gltf.scene);
          const centre = box.getCenter(new THREE.Vector3());
          gltf.scene.position.sub(centre);
          // A caixa precisa acompanhar a recentralização, senão o enquadramento
          // é calculado em torno de outro ponto e o modelo sai fora do quadro.
          const centredBox = box.clone().translate(centre.clone().negate());

          // Câmera padrão: vista em três quartos, a uma distância unitária só
          // para fixar a orientação (o lookAt define o quaternion).
          const dir = new THREE.Vector3(0.62, 0.42, 0.75).normalize();
          camera.position.copy(dir);
          camera.lookAt(0, 0, 0);
          camera.updateMatrixWorld();

          fitDistance = fitDistanceFor(centredBox);
          fitDir.copy(dir);
          camera.position.copy(dir).multiplyScalar(fitDistance);
          camera.near = fitDistance / 100;
          camera.far = fitDistance * 100;
          camera.updateProjectionMatrix();
          camera.lookAt(0, 0, 0);
          controls.minDistance = fitDistance * 0.25;
          controls.maxDistance = fitDistance * 8;
          controls.update();

          gltf.scene.traverse((obj) => {
            const mesh = obj as import('three').Mesh;
            if (!mesh.isMesh) return;
            const meta = fcp01Parts.find((p: Fcp01Part) => p.id === mesh.name);
            if (!meta) return;
            mesh.material = (mesh.material as import('three').Material).clone();
            const mat = mesh.material as import('three').MeshStandardMaterial;
            // Transparência ligada desde já: alternar depois exigiria recompilar
            // o shader. Com opacidade 1 e depthWrite, o resultado é o mesmo.
            mat.transparent = true;
            mat.depthWrite = true;
            mat.needsUpdate = true;
            // Cor exata da peça (o GLB é só geometria + um cinza neutro).
            mat.color.set(meta.color);
            mat.roughness = Math.min(1, (mat.roughness ?? 0.6) + 0.05);
            // setFromObject não propaga a recentralização do pai (o update é
            // feito com updateParents = false), então o deslocamento entra na mão.
            const partBox = new THREE.Box3().setFromObject(mesh);
            parts.push({
              id: mesh.name,
              object: mesh,
              offset: new THREE.Vector3(),
              centreY: partBox.getCenter(new THREE.Vector3()).y - centre.y,
              movable: meta.explode > 0,
              shell: !!meta.shell,
            });
          });

          // Vista explodida = leque vertical: as peças móveis mantêm a ordem em
          // que estão empilhadas e ficam igualmente espaçadas, de modo que a
          // tampa, as placas e a roda de reação saiam de dentro do chassi sem
          // se sobrepor. Chassi e fixadores ficam parados (explode: 0).
          const movable = parts.filter((p) => p.movable).sort((a, b) => b.centreY - a.centreY);
          const step = EXPLODE_SPACING;
          movable.forEach((part, index) => {
            const targetY = ((movable.length - 1) / 2 - index) * step;
            part.offset.set(0, targetY - part.centreY, 0);
          });

          setStatus('ready');
        },
        undefined,
        () => { if (!cancelled) setStatus('error'); }
      );

      const clock = new THREE.Clock();
      let frame = 0;
      const animate = () => {
        if (disposed) return;
        frame = requestAnimationFrame(animate);
        const dt = Math.min(clock.getDelta(), 0.05);

        currentExplode += (targetExplode - currentExplode) * Math.min(1, dt * 6);
        if (Math.abs(targetExplode - currentExplode) < 0.001) currentExplode = targetExplode;

        for (const part of parts) {
          part.object.position.copy(part.offset).multiplyScalar(currentExplode);
        }

        // Chassi translúcido na vista explodida: as placas ficam visíveis (e
        // clicáveis) sem precisar afastá-las para fora do envelope do chassi.
        for (const part of parts) {
          const mat = part.object.material as import('three').MeshStandardMaterial;
          const ghost = part.shell ? 1 - 0.72 * currentExplode : 1;
          const dim = selectedId && part.id !== selectedId ? 0.5 : 1;
          const opacity = Math.min(ghost, dim);
          mat.opacity = opacity;
          mat.depthWrite = opacity > 0.9;
        }

        // Enquanto a explosão anima, reenquadra a cada quadro: a caixa cresce e
        // o zoom acompanha, parando assim que as peças assentam.
        if (refit && parts.length) {
          const want = fitDistanceFor(partsBox(boxScratch));
          offset.copy(camera.position).sub(controls.target);
          const d = offset.length() || 1;
          offset.multiplyScalar((d + (want - d) * Math.min(1, dt * 9)) / d);
          camera.position.copy(controls.target).add(offset);
          if (currentExplode === targetExplode && Math.abs(want - d) < 0.5) refit = false;
        }

        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const resize = () => {
        const w = host.clientWidth || width;
        const h = host.clientHeight || height;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        refit = true;
      };
      const observer = new ResizeObserver(resize);
      observer.observe(host);

      apiRef.current = {
        setSelected: (id) => {
          selectedId = id;
          applySelection();
        },
        setExploded: (on) => {
          targetExplode = on ? 1 : 0;
          refit = true;
        },
        setAutoRotate: (on) => { controls.autoRotate = on; },
        resetView: () => {
          refit = false;
          camera.position.copy(fitDir).multiplyScalar(fitDistance);
          controls.target.set(0, 0, 0);
          camera.lookAt(0, 0, 0);
          controls.update();
        },
        dispose: () => {
          disposed = true;
          cancelAnimationFrame(frame);
          observer.disconnect();
          renderer.domElement.removeEventListener('pointerdown', onPointerDown);
          renderer.domElement.removeEventListener('pointerup', onPointerUp);
          renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
          renderer.domElement.removeEventListener('pointermove', onPointerMove);
          draco.dispose();
          envRT.dispose();
          pmrem.dispose();
          controls.dispose();
          renderer.dispose();
          renderer.domElement.remove();
          host.replaceChildren();
        },
      };

      cleanup = () => apiRef.current?.dispose();
    })().catch(() => { if (!cancelled) setStatus('error'); });

    return () => {
      cancelled = true;
      cleanup();
      apiRef.current = null;
    };
  }, []);

  useEffect(() => { apiRef.current?.setExploded(exploded); }, [exploded]);
  useEffect(() => { apiRef.current?.setAutoRotate(autoRotate); }, [autoRotate]);
  useEffect(() => { apiRef.current?.setSelected(selected); }, [selected]);

  const selectPart = useCallback((id: string) => {
    setSelected((cur) => (cur === id ? null : id));
  }, []);

  const info = fcp01Parts.find((p) => p.id === selected) || null;

  return (
    <div className="model-explorer">
      <div className="model-explorer-stage">
        <div ref={hostRef} className="model-explorer-host" role="img" aria-label="Modelo 3D interativo do satélite FCP-01" />

        {status === 'loading' && <p className="model-explorer-status">Carregando modelo 3D…</p>}
        {status === 'error' && (
          <p className="model-explorer-status">Não foi possível carregar o modelo 3D neste navegador.</p>
        )}

        <div className="model-explorer-toolbar">
          <button
            type="button"
            onClick={() => setExploded((v) => !v)}
            aria-pressed={exploded}
            className={exploded ? 'active' : ''}
          >
            <Sparkles size={16} /> {exploded ? 'Montar' : 'Explodir'}
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            aria-pressed={autoRotate}
          >
            {autoRotate ? <Pause size={16} /> : <Play size={16} />} Girar
          </button>
          <button type="button" onClick={() => apiRef.current?.resetView()}>
            <RotateCcw size={16} /> Repor vista
          </button>
          {selected && (
            <button type="button" onClick={() => setSelected(null)}>
              <Maximize2 size={16} /> Ver tudo
            </button>
          )}
        </div>
      </div>

      <div className="model-explorer-side">
        <p className="model-explorer-hint">Clique numa peça (no modelo ou na lista) para ver o que ela faz.</p>
        <ul className="model-explorer-parts">
          {fcp01Parts.map((part) => (
            <li key={part.id}>
              <button
                type="button"
                className={selected === part.id ? 'selected' : ''}
                aria-pressed={selected === part.id}
                onClick={() => selectPart(part.id)}
              >
                <span className="swatch" style={{ background: part.color }} aria-hidden="true" />
                {part.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="model-explorer-info" aria-live="polite">
          {info ? (
            <>
              <h3>
                <span className="swatch" style={{ background: info.color }} aria-hidden="true" />
                {info.label}
              </h3>
              <p>{info.description}</p>
            </>
          ) : (
            <p className="model-explorer-empty">Nenhuma peça selecionada.</p>
          )}
        </div>
      </div>
    </div>
  );
}
