import Hero from '../components/Hero';
import Model3D from '../components/Model3D';
import { Section } from '../components/Shared';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { usePageTitle } from './usePageTitle';

// Mesmos GLBs da página do FCP-01 — fonte no Drive (Mecânica/Modelos 3D Gerais).
const models3d = [
  { id: 'antenas', src: 'models/fcp-01-antenas.glb', label: 'Antenas', alt: 'Antenas do FCP-01 em modelo 3D interativo' },
  { id: 'painel', src: 'models/fcp-01-painel-solar.glb', label: 'Painel solar', alt: 'Painel solar do FCP-01 em modelo 3D interativo' },
];

export default function Inicio() {
  usePageTitle('');
  return (
    <>
      <Hero />
      <Section id="home-3d" title="Explore o FCP-01 em 3D" className="tinted" aria-labelledby="home-3d-title">
        <div className="container">
          <p className="section-description">Arraste para rotacionar e use scroll ou pinça para aproximar. No celular, toque no ícone de realidade aumentada para projetar o modelo no seu ambiente.</p>
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
          <Link to="/projetos/fcp-01" className="button secondary" style={{marginTop: '24px'}}>Ver a página completa do FCP-01 <ArrowUpRight size={18} /></Link>
        </div>
      </Section>
    </>
  );
}
