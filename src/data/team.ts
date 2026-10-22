export const sectors = ['Administração','Embarcados','Controle e Energia','P&D','Mecânica'] as const;
export interface Member {id:string;name:string;role:string;area:typeof sectors[number]|null;photo:string|null;linkedin:string|null;github:string|null}
// Nenhuma identidade pessoal foi inventada. Aguardando validação da equipe.
export const team:Member[] = [
  {id:'membro-1',name:'Integrante a confirmar',role:'Cargo a confirmar',area:'Administração',photo:null,linkedin:null,github:null},
  {id:'membro-2',name:'Integrante a confirmar',role:'Cargo a confirmar',area:'Embarcados',photo:null,linkedin:null,github:null},
  {id:'membro-3',name:'Integrante a confirmar',role:'Cargo a confirmar',area:'Controle e Energia',photo:null,linkedin:null,github:null},
  {id:'membro-4',name:'Integrante a confirmar',role:'Cargo a confirmar',area:'P&D',photo:null,linkedin:null,github:null},
  {id:'membro-5',name:'Integrante a confirmar',role:'Cargo a confirmar',area:'Mecânica',photo:null,linkedin:null,github:null},
];
