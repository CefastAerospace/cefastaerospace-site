export interface Achievement {id:string;year:string;competition:string;result:string;description:string}
// Somente conquistas históricas reais (a pequena ordem cronológica é garantida por teste).
// Eventos futuros/em preparação (ex.: CubeDesign 2026 com o FCP-01) ficam em projects.ts e na
// página /projetos/fcp-01 — nunca aqui, para a linha do tempo não misturar anos.
export const achievements:Achievement[] = [
  {
    id:'cubedesign-virtual-2020',
    year:'2020',
    competition:'CubeDesign Virtual 2020 — Modalidade CanSat',
    result:'2º lugar',
    description:'Segundo lugar na edição virtual do CubeDesign 2020, modalidade CanSat. Primeiro grande resultado da equipe em competição internacional.',
  },
  {
    id:'obsat-2022',
    year:'2022',
    competition:'OBSAT 2022 — Nível 2 Regional',
    result:'1º lugar (Regional)',
    description:'Primeiro lugar no OBSAT 2022, Nível 2 – Regional, demonstrando competência técnica em desenvolvimento de satélites educacionais.',
  },
  {
    id:'cubedesign-2025',
    year:'2025',
    competition:'CubeDesign 2025 — Modalidade CanSat',
    result:'1º lugar (Competição Internacional)',
    description:'Conquista do primeiro lugar na modalidade CanSat do CubeDesign 2025, competição internacional realizada na Argentina, com o CanSat HRP-01, da linha HRP. Validação da capacidade da equipe em desenvolver e operar nanosatélites.',
  },
];
