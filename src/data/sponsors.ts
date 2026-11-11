export interface Sponsor {id:string;name:string;logo:string|null;url:string|null;tier:'principal'|'patrocinador'|'institucional'|'apoiador'}
export const sponsorTiers = [{id:'principal',label:'Patrocinadores principais'},{id:'patrocinador',label:'Patrocinadores'},{id:'institucional',label:'Apoio institucional'},{id:'apoiador',label:'Apoiadores'}] as const;
// Sponsors reais confirmados pelo líder (categorias a estimar conforme proposta comercial 2026).
// logo: caminho relativo à base do site (o componente prefixa com import.meta.env.BASE_URL).
export const sponsors:Sponsor[] = [
  {id:'solidworks',name:'SolidWorks',logo:'sponsors/solidworks.svg',url:'https://www.solidworks.com/',tier:'patrocinador'},
  {id:'cadence',name:'Cadence',logo:'sponsors/cadence.svg',url:'https://www.cadence.com/',tier:'patrocinador'},
  {id:'ats',name:'ATS',logo:'sponsors/ats.svg',url:null,tier:'patrocinador'},
  {id:'minas-gerais',name:'Minas Gerais',logo:'sponsors/minas-gerais.svg',url:null,tier:'patrocinador'},
  {id:'brasil',name:'Brasil',logo:'sponsors/brasil.png',url:null,tier:'patrocinador'},
  {id:'gedai',name:'Gedai (Grupo de Astronomia CEFET-MG)',logo:'sponsors/gedai.png',url:null,tier:'institucional'},
  {id:'ufci-mg',name:'UFCI-MG',logo:'sponsors/ufci-mg.svg',url:null,tier:'institucional'},
  {id:'apoio-captacao',name:'Em captação',logo:null,url:null,tier:'apoiador'},
];
