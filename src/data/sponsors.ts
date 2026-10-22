export interface Sponsor {id:string;name:string;logo:string|null;url:string|null;tier:'principal'|'patrocinador'|'apoiador'}
export const sponsorTiers = [{id:'principal',label:'Patrocinadores principais'},{id:'patrocinador',label:'Patrocinadores'},{id:'apoiador',label:'Apoiadores'}] as const;
// Sponsors reais confirmados pelo líder (categorias a estimar conforme proposta comercial 2026).
// Níveis da proposta: Apoiador R$250 | Bronze R$750 | Prata R$1.500 | Ouro R$3.000 | Diamante R$5.000
// logo: caminho relativo à base do site (o componente prefixa com import.meta.env.BASE_URL).
export const sponsors:Sponsor[] = [
  {id:'gedai',name:'Gedai (Grupo de Astronomia CEFET-MG)',logo:null,url:null,tier:'principal'},
  {id:'solidworks',name:'SolidWorks',logo:'sponsors/solidworks.svg',url:'https://www.solidworks.com/',tier:'patrocinador'},
  {id:'cadence',name:'Cadence',logo:'sponsors/cadence.svg',url:'https://www.cadence.com/',tier:'patrocinador'},
  {id:'apoio-captacao',name:'Em captação',logo:null,url:null,tier:'apoiador'},
];
