export interface Project {id:string; name:string; description:string; category:string; technologies:string[]; status:string; image:string|null; imageAlt:string; url:string|null}
// Dados baseados na proposta comercial 2026. Linha HRP = CanSats · linha Falcão Peregrino = CubeSats.
// Outros projetos serão adicionados após validação.
export const projects:Project[] = [
  {
    id:'fcp-01',
    name:'FCP-01 (Falcão Peregrino)',
    description:'Primeiro CubeSat 2U da linha Falcão Peregrino, desenvolvido para o CubeDesign 2026. Missão de recepção, processamento e transmissão de sinais ADS-B para identificação e acompanhamento de aeronaves. Dimensões: 10 × 10 × 19,6 cm. Integra subsistemas OBC&DH, TT&C, Payload, ADCS, EPS&TC e STR.',
    category:'CubeSat 2U',
    technologies:['ADS-B','OBC&DH','TT&C','Payload','ADCS','EPS&TC','STR'],
    status:'Em desenvolvimento para CubeDesign 2026 (24–27/11/2026, Buenos Aires)',
    image:null,
    imageAlt:'Render 3D do FCP-01',
    url:'/projetos/fcp-01',
  },
  {
    id:'hrp-01',
    name:'HRP-01 (CanSat)',
    description:'CanSat da linha HRP, campeão do CubeDesign 2025 com 1º lugar na modalidade CanSat (competição internacional). Integra telemetria, estrutura, recuperação e payload, e serviu de base para a evolução tecnológica que levou ao desenvolvimento do FCP-01.',
    category:'CanSat',
    technologies:['Telemetria','Estrutura','Recuperação','Payload'],
    status:'Concluído — 1º lugar no CubeDesign 2025',
    image:null,
    imageAlt:'CanSat HRP-01',
    url:null,
  },
];
