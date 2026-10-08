export const navigation = [
  { id: "inicio", label: "Início", path: "" },
  { id: "equipe", label: "Equipe", path: "equipe/" },
  { id: "projetos", label: "Projetos", path: "projetos/" },
  { id: "fcp-01", label: "FCP-01", path: "projetos/fcp-01/" },
  { id: "patrocinadores", label: "Patrocinadores", path: "patrocinadores/" },
  { id: "contato", label: "Contato", path: "contato/" },
];
export interface AboutContent {
  title: string;
  paragraphs: string[];
  items: string[];
  pending: string;
}
// História: inserir 2–3 parágrafos validados. Missão: 1–2 frases.
export const about: AboutContent[] = [
  {
    title: "Nossa história",
    paragraphs: [],
    items: [],
    pending:
      "Conteúdo a confirmar. Aqui será apresentada a origem da CEFAST Aerospace e sua trajetória no CEFET-MG.",
  },
  {
    title: "Nossa missão",
    paragraphs: [],
    items: [],
    pending:
      "Conteúdo a confirmar. Este espaço receberá a missão e os princípios que orientam a equipe.",
  },
  {
    title: "Nossos objetivos",
    paragraphs: [],
    items: [],
    pending:
      "Conteúdo a confirmar. Aqui serão apresentados os objetivos de desenvolvimento e competição da equipe.",
  },
];
export const metrics: { label: string; value: number | null }[] = [
  { label: "Membros", value: null },
  { label: "Projetos", value: null },
  { label: "Competições", value: null },
  { label: "Anos de história", value: null },
];
export type Contact = {
  name: string;
  icon: "instagram" | "facebook" | "linkedin" | "youtube" | "github" | "email";
  url: string | null;
};
// Substituir null somente por canais oficiais validados.
export const contacts: Contact[] = [
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/cefastaerospace/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/cefastaerospace/?locale=pt_BR",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/company/cefast-aerospace/?originalSubdomain=br",
  },
  {
    name: "YouTube",
    icon: "youtube",
    url: "https://www.youtube.com/channel/UC_pCVSEK9eapoDFl8jVFm1w/playlists",
  },
  { name: "GitHub", icon: "github", url: "https://github.com/CefastAerospace" },
  { name: "E-mail", icon: "email", url: "mailto:cefastaerospace@gmail.com" },
];
