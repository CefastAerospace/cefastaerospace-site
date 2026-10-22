// path: rota da página própria (estrutura multi-página, react-router).
export const navigation = [
  {id:'inicio',label:'Início',path:'/'},
  {id:'sobre',label:'Sobre',path:'/sobre'},
  {id:'projetos',label:'Projetos',path:'/projetos'},
  {id:'conquistas',label:'Conquistas',path:'/conquistas'},
  {id:'equipe',label:'Equipe',path:'/equipe'},
  {id:'patrocinadores',label:'Patrocinadores',path:'/patrocinadores'},
  {id:'contato',label:'Contato',path:'/contato'},
];
export const about = [
  {
    title:'Nossa história',
    text:'Fundada em 2018, a CEFAST Aerospace é uma equipe estudantil do CEFET-MG dedicada ao desenvolvimento de tecnologias aeroespaciais e missões com nanossatélites. Com 47 membros do ensino técnico e da graduação, de diferentes cursos, a equipe desenvolve projetos multidisciplinares para plataformas CanSat e CubeSat. Ao longo de sua trajetória, a CEFAST Aerospace conquistou resultados expressivos em competições aeroespaciais no Brasil e na América Latina, incluindo 1º lugar no CubeDesign 2025 (modalidade CanSat, competição internacional), 1º lugar no OBSAT 2022 (Nível 2 – Regional) e 2º lugar no CubeDesign Virtual 2020 (modalidade CanSat). Em 2026, a equipe dá o próximo passo com o desenvolvimento do FCP-01 (Falcão Peregrino), seu primeiro CubeSat 2U, desenvolvido para competir no CubeDesign 2026, que será realizado de 24 a 27 de novembro, em Buenos Aires, Argentina.'
  },
  {
    title:'Nossa missão',
    text:'Proporcionar aos estudantes experiência prática em engenharia de sistemas e desenvolvimento de tecnologias aeroespaciais, formando profissionais capacitados e contribuindo para o crescimento do setor aeroespacial brasileiro.'
  },
  {
    title:'Nossos objetivos',
    text:'Desenvolver o FCP-01 (CubeSat 2U) para o CubeDesign 2026, executando missão de recepção, processamento e transmissão de sinais ADS-B para identificação e acompanhamento de aeronaves. Ampliar a complexidade técnica dos projetos da equipe, integrando subsistemas de engenharia (OBC&DH, TT&C, Payload, ADCS, EPS&TC, STR) e consolidar a participação em competições internacionais.'
  },
];
export type Metric = {id:string;value:string;label:string;description:string};
// Números reais da proposta comercial 2026 (sem placeholders "A confirmar").
export const metrics:Metric[] = [
  {id:'membros',value:'47+',label:'Membros',description:'Estudantes do ensino técnico e da graduação do CEFET-MG'},
  {id:'projetos',value:'2',label:'Projetos',description:'Linha HRP (CanSat HRP-01) e linha Falcão Peregrino (FCP-01, CubeSat 2U)'},
  {id:'conquistas',value:'3',label:'Conquistas',description:'Pódios em competições no Brasil e na América Latina'},
  {id:'anos',value:'8+',label:'Anos',description:'Fundada em 2018 no CEFET-MG'},
];
export type Contact = {name:string; url:string|null};
// Substituir null somente por canais oficiais validados.
export const contacts: Contact[] = [
  {name:'Instagram',url:'https://www.instagram.com/cefastaerospace/'},
  {name:'LinkedIn',url:'https://www.linkedin.com/company/cefast-aerospace/?originalSubdomain=br'},
  {name:'GitHub',url:'https://github.com/CefastAerospace'},
  {name:'E-mail',url:'mailto:cefastaerospace@gmail.com'},
  {name:'Telefone',url:'tel:+5531997416439'},
  {name:'Endereço',url:'https://maps.app.goo.gl/CEFET-MG%20Campus%20II%2C%20Av.%20Amazonas%207675%2C%20Nova%20Gameleira%2C%20Belo%20Horizonte%2C%20MG%2C%20Brasil'},
];
