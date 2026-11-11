import { Link } from 'react-router-dom';
import { usePageTitle } from './usePageTitle';
import { ArrowLeft, Package, Radio, Cpu, Battery, Shield, Box, Calendar, MapPin, Target, Github } from 'lucide-react';
import { Section } from '../components/Shared';
import Model3D from '../components/Model3D';
import type { CSSProperties } from 'react';

const iconStyle: CSSProperties = { color: 'var(--cyan)' };
const iconStyleSmall: CSSProperties = { color: 'var(--cyan)' };

// Peças do FCP-01 exportadas do SolidWorks (GLB). Modelo completo do satélite em
// breve — ver drive Mecânica/Modelos 3D Gerais e issue de pendências no GitHub.
const models3d = [
  { id: 'antenas', src: 'models/fcp-01-antenas.glb', label: 'Antenas', alt: 'Antenas do FCP-01 em modelo 3D interativo', note: 'Elementos de antena do sistema TT&C, para comunicação bidirecional com a estação terrena.' },
  { id: 'painel', src: 'models/fcp-01-painel-solar.glb', label: 'Painel solar', alt: 'Painel solar do FCP-01 em modelo 3D interativo', note: 'Painel fotovoltaico do subsistema EPS&TC, responsável pela geração de energia em órbita.' },
];

const subsystems = [
  { id: 'obc-dh', icon: Cpu, title: 'OBC&DH', desc: 'Computador de bordo e tratamento de dados — gerencia todos os subsistemas, processamento de telemetria e comandos.' },
  { id: 'ttc', icon: Radio, title: 'TT&C', desc: 'Telemetria, rastreio e comando — comunicação bidirecional com a estação terrena, downlink de dados e uplink de comandos.' },
  { id: 'payload', icon: Package, title: 'Payload', desc: 'Carga útil principal — receptor ADS-B para identificação e acompanhamento de aeronaves via sinais de transponder.' },
  { id: 'adcs', icon: Shield, title: 'ADCS', desc: 'Determinação e controle de atitude — estabilização e apontamento do satélite usando magnetorquers e sensores.' },
  { id: 'eps-tc', icon: Battery, title: 'EPS&TC', desc: 'Energia, potência e controle térmico — geração (painéis solares), armazenamento (baterias) e regulação térmica.' },
  { id: 'str', icon: Box, title: 'STR', desc: 'Estrutura mecânica — chassi 2U (10×10×19,6 cm), interfaces de lançamento, fixação de subsistemas e proteção ambiental.' },
];

const specs = [
  { label: 'Formato', value: 'CubeSat 2U' },
  { label: 'Dimensões', value: '10 × 10 × 19,6 cm' },
  { label: 'Massa', value: '~2,66 kg (limite 2U)' },
  { label: 'Missão', value: 'Recepção/processamento/transmissão ADS-B' },
  { label: 'Órbita alvo', value: 'LEO (baixa órbita terrestre)' },
  { label: 'Competição', value: 'CubeDesign 2026' },
];

const timeline = [
  { phase: 'Concepção & Requisitos', period: '2025–2026', status: 'Concluído', detail: 'Definição de missão ADS-B, seleção de componentes, revisão de requisitos (SRR).' },
  { phase: 'Projeto Preliminar (PDR)', period: 'Início 2026', status: 'Concluído', detail: 'Arquitetura de subsistemas, orçamentos de massa/potência/link, análises térmicas/estruturais preliminares.' },
  { phase: 'Projeto Detalhado (CDR)', period: 'Meio 2026', status: 'Em andamento', detail: 'Projeto detalhado de PCBs, estrutura, software de bordo, planos de teste e integração.' },
  { phase: 'Fabricação & Integração', period: 'Jul–Out 2026', status: 'Planejado', detail: 'Fabricação de PCBs, usinagem estrutura, montagem, testes de subsistemas individuais.' },
  { phase: 'Testes Ambientais', period: 'Out 2026', status: 'Planejado', detail: 'Vibração, choque, vácuo térmico, compatibilidade eletromagnética (EMC).' },
  { phase: 'Revisão de Prontidão (FRR)', period: 'Nov 2026', status: 'Planejado', detail: 'Revisão final antes do envio, validação de todos os relatórios de teste.' },
  { phase: 'CubeDesign 2026', period: '24–27 Nov 2026', status: 'Planejado', detail: 'Competição em Buenos Aires, Argentina — apresentação, revisão técnica, demonstração de missão.' },
];

export default function FCP01() {
  usePageTitle('FCP-01 — Falcão Peregrino');
  return (
    <>
      <Section id="fcp01-hero" title="FCP-01 ● Falcão Peregrino" className="hero" aria-labelledby="fcp01-title">
        <div className="container hero-content">
          <div className="eyebrow"><span className="tiny-line" /><span>PROJETO EM DESENVOLVIMENTO</span></div>
          <h1 id="fcp01-title"><span>FCP-01</span><span className="title-dot">●</span> Falcão Peregrino</h1>
          <div className="hero-bottom">
            <div>
              <h2>Primeiro CubeSat 2U da CEFAST Aerospace</h2>
              <p>Missão ADS-B para o CubeDesign 2026 — Buenos Aires, Argentina</p>
            </div>
            <div className="hero-actions">
              <Link to="/projetos" className="button secondary"><ArrowLeft size={18} /> Voltar aos Projetos</Link>
              <a href="https://github.com/CefastAerospace" target="_blank" rel="noopener noreferrer" className="button primary"><Github size={18} /> GitHub da Equipe</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="fcp01-specs" title="Especificações Técnicas" className="tinted" aria-labelledby="specs-title">
        <div className="container">
          <p className="section-description">Principais características técnicas do FCP-01, primeiro CubeSat 2U da linha Falcão Peregrino.</p>
          <div className="project-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {specs.map((s) => (
              <article key={s.label} className="project-card" style={{textAlign: 'left'}}>
                <div className="project-body">
                  <p className="overline">{s.label}</p>
                  <h3>{s.value}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="fcp01-3d" title="Modelo 3D Interativo" aria-labelledby="models3d-title">
        <div className="container">
          <p className="section-description">Explore componentes do FCP-01 em 3D — arraste para rotacionar, use scroll ou pinça para aproximar. No celular, toque no ícone de realidade aumentada para projetar o modelo no seu ambiente.</p>
          <div className="project-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'}}>
            {models3d.map((m) => (
              <article key={m.id} className="project-card" style={{textAlign: 'left'}}>
                <div className="project-image" style={{height: 'auto', padding: '8px 0'}}>
                  <Model3D src={m.src} alt={m.alt} />
                </div>
                <div className="project-body">
                  <h3>{m.label}</h3>
                  <p>{m.note}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="overline" style={{marginTop: '24px', textAlign: 'center'}}>Modelo 3D completo do satélite em breve</p>
        </div>
      </Section>

      <Section id="fcp01-subsystems" title="Subsistemas do FCP-01" aria-labelledby="subsystems-title">
        <div className="container">
          <p className="section-description">O FCP-01 integra seis subsistemas principais, cada um responsável por funções críticas da missão.</p>
          <div className="project-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'}}>
            {subsystems.map((s) => (
              <article key={s.id} className="project-card" style={{textAlign: 'left'}}>
                <div className="project-image" style={{height: '120px', justifyContent: 'flex-start' as const}}>
                  <s.icon size={48} strokeWidth={1.5} style={iconStyle} />
                </div>
                <div className="project-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="fcp01-timeline" title="Cronograma do Projeto" className="tinted" aria-labelledby="timeline-title">
        <div className="container">
          <p className="section-description">Principais marcos do desenvolvimento do FCP-01 até o CubeDesign 2026.</p>
          <div className="timeline">
            {timeline.map((t, _i) => (
              <article key={t.phase}>
                <div className="timeline-year">{t.period}</div>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                    <h3>{t.phase}</h3>
                    <span className={`pending`} style={{
                      background: t.status==='Concluído' ? '#1a4d2e' : t.status==='Em andamento' ? '#4d3a1a' : '#2b566b',
                      borderColor: t.status==='Concluído' ? '#2d8a3e' : t.status==='Em andamento' ? '#c49a2c' : '#2b566b'
                    }}>{t.status}</span>
                  </div>
                  <p>{t.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="fcp01-competition" title="Competição CubeDesign 2026" aria-labelledby="competition-title">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px', marginTop: '32px'}}>
            <article className="project-card" style={{textAlign: 'left'}}>
              <div className="project-body">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}><Calendar size={18} style={iconStyleSmall} /><span style={{fontWeight: 600}}>24 a 27 de Novembro de 2026</span></div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}><MapPin size={18} style={iconStyleSmall} /><span>Buenos Aires, Argentina</span></div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Target size={18} style={iconStyleSmall} /><span>Modalidade CubeSat 2U</span></div>
              </div>
            </article>
            <article className="project-card" style={{textAlign: 'left'}}>
              <div className="project-body">
                <h3>Objetivos da Competição</h3>
                <ul style={{margin: '16px 0 0', paddingLeft: '20px', color: 'var(--muted)', lineHeight: 2}}>
                  <li>Demonstração de missão ADS-B operacional</li>
                  <li>Revisão de projeto (PDR/CDR/FRR) perante banca</li>
                  <li>Testes de integração e ambientais documentados</li>
                  <li>Apresentação técnica e pôster da equipe</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section id="fcp01-cta" title="Sua empresa pode fazer parte do FCP-01" className="partnership" aria-labelledby="cta-title">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <p>O patrocínio viabiliza transporte, hospedagem da delegação em Buenos Aires e custos de desenvolvimento do satélite. Confira os níveis e benefícios na página de Patrocinadores.</p>
          <Link to="/patrocinadores" className="button primary" style={{marginTop: '24px'}}>Ver Níveis de Patrocínio</Link>
        </div>
      </Section>
    </>
  );
}