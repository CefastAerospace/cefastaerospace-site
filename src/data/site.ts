// path: rota da página própria (estrutura multi-página, react-router).
export const navigation = [{id:'inicio',label:'Início',path:'/'},{id:'sobre',label:'Sobre',path:'/sobre'},{id:'projetos',label:'Projetos',path:'/projetos'},{id:'conquistas',label:'Conquistas',path:'/conquistas'},{id:'equipe',label:'Equipe',path:'/equipe'},{id:'patrocinadores',label:'Patrocinadores',path:'/patrocinadores'},{id:'contato',label:'Contato',path:'/contato'}];
export const about = [{title:'Nossa história',text:'Conteúdo a confirmar. Aqui será apresentada a origem da CEFAST Aerospace e sua trajetória no CEFET-MG.'},{title:'Nossa missão',text:'Conteúdo a confirmar. Este espaço receberá a missão e os princípios que orientam a equipe.'},{title:'Nossos objetivos',text:'Conteúdo a confirmar. Aqui serão apresentados os objetivos de desenvolvimento e competição da equipe.'}];
export const metrics = ['Membros','Projetos','Competições','Anos de história'];
export type Contact = {name:string; url:string|null};
// Substituir null somente por canais oficiais validados.
export const contacts: Contact[] = [
  {name:'Instagram',url:'https://www.instagram.com/cefastaerospace/'},
  {name:'Facebook',url:'https://www.facebook.com/cefastaerospace/?locale=pt_BR'},
  {name:'LinkedIn',url:'https://www.linkedin.com/company/cefast-aerospace/?originalSubdomain=br'},
  {name:'YouTube',url:'https://www.youtube.com/channel/UC_pCVSEK9eapoDFl8jVFm1w/playlists'},
  {name:'GitHub',url:'https://github.com/CefastAerospace'},
  {name:'E-mail',url:'mailto:cefastaerospace@gmail.com'},
];
