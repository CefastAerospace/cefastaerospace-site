export const sectors = ['Gestão','Aerodinâmica','Estruturas','Propulsão','Eletrônica','Software','Marketing'] as const;
export interface Member {id:string;name:string;role:string;area:typeof sectors[number]|null;photo:string|null;linkedin:string|null;github:string|null}
// Nenhuma identidade pessoal foi inventada.
export const team:Member[] = [1,2,3,4].map(n=>({id:`membro-${n}`,name:'Integrante a confirmar',role:'Cargo a confirmar',area:null,photo:null,linkedin:null,github:null}));
