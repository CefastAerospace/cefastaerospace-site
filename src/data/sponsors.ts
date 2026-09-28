export interface Sponsor {id:string;name:string;logo:string|null;url:string|null;tier:'principal'|'patrocinador'|'apoiador'}
export const sponsorTiers = [{id:'principal',label:'Patrocinadores principais'},{id:'patrocinador',label:'Patrocinadores'},{id:'apoiador',label:'Apoiadores'}] as const;
export const sponsors:Sponsor[] = sponsorTiers.map(t=>({id:t.id,name:'Marcas a confirmar',logo:null,url:null,tier:t.id}));
