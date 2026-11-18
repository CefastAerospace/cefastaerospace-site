import Hero from '../components/Hero';
import Model3D from '../components/Model3D';
import { Section } from '../components/Shared';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { usePageTitle } from './usePageTitle';

// Mesmo modelo da página do FCP-01 (peças separadas e coloridas). O explorador
// interativo, com clique por peça e vista explodida, fica em /projetos/fcp-01.
const models3d = [
  { id: 'satelite', src: 'models/fcp-01-explorar.glb', label: 'FCP-01 — Falcão Peregrino', alt: 'Satélite FCP-01 em modelo 3D interativo' },
];

export default function Inicio() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Section id="home-3d" title="Explore o FCP-01 em 3D" className="tinted" aria-labelledby="home-3d-title">
        <div className="container">
          <p className="section-description">Arraste para rotacionar e use scroll ou pinça para aproximar. Na página do projeto, cada peça pode ser selecionada e separada numa vista explodida.</p>
          <div className="project-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            {models3d.map((m) => (
              <article key={m.id} className="project-card" style={{textAlign: 'left'}}>
                <div className="project-image" style={{height: 'auto', padding: '8px 0'}}>
                  <Model3D src={m.src} alt={m.alt} />
                </div>
                <div className="project-body"><h3>{m.label}</h3></div>
              </article>
            ))}
          </div>
          <Link to="/projetos/fcp-01" className="button secondary" style={{marginTop: '24px'}}>Explorar peça por peça <ArrowUpRight size={18} /></Link>
        </div>
      </Section>
    </>
  );
}
