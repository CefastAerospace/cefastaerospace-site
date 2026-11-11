import {useEffect,useState} from 'react';
import type {CSSProperties,DetailedHTMLProps,HTMLAttributes} from 'react';

// model-viewer (web component do Google) self-hosted: import dinâmico → o Vite gera
// chunk assíncrono carregado só quando a página com modelo 3D é montada. Sem
// dependência de CDN externo (redes de instituição costumam bloquear).
/* eslint-disable @typescript-eslint/no-namespace */
// namespace permitido: única forma de declarar o elemento custom <model-viewer> p/ TS
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string; alt?: string; poster?: string; ar?: string;
        'ar-modes'?: string; 'camera-controls'?: string; 'auto-rotate'?: string;
        'rotation-per-second'?: string; 'shadow-intensity'?: string; exposure?: string;
        'interaction-prompt'?: string;
      };
    }
  }
}

function useModelViewer(): boolean {
  const [ready,setReady] = useState(() => typeof customElements !== 'undefined' && !!customElements.get('model-viewer'));
  useEffect(() => {
    let mounted = true;
    if (typeof customElements === 'undefined' || customElements.get('model-viewer')) return;
    import('@google/model-viewer').then(() => { if (mounted) setReady(true); });
    return () => { mounted = false; };
  }, []);
  return ready;
}

interface Model3DProps {src:string; alt:string; style?:CSSProperties}

export default function Model3D({src,alt,style}:Model3DProps){
  useModelViewer();
  return (
    <model-viewer
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      ar="true"
      ar-modes="webxr scene-viewer quick-look"
      camera-controls="true"
      auto-rotate="true"
      rotation-per-second="30deg"
      shadow-intensity="1"
      exposure="1"
      interaction-prompt="none"
      style={{width:'100%',height:'300px',display:'block',background:'transparent',...style}}
    />
  );
}
