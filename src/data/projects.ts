export const projectStatuses = [
  { id: "planned", label: "Planejados" },
  { id: "active", label: "Em desenvolvimento" },
  { id: "completed", label: "Concluídos" },
  { id: "pending", label: "Status a confirmar" },
] as const;
export type ProjectStatus = (typeof projectStatuses)[number]["id"];
export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  status: string;
  lifecycle: ProjectStatus;
  image: string | null;
  imageAlt: string;
  url: string | null;
}
export const projects: Project[] = [
  {
    id: "cansat",
    lifecycle: "pending",
    name: "CubeDesign — CanSat",
    description:
      "O briefing cita o 1º lugar em CanSat no CubeDesign 2025. Aguardando confirmação da liderança e referência oficial antes da publicação como conquista validada.",
    category: "Projeto de competição",
    technologies: ["CanSat", "CubeDesign 2025"],
    status: "Resultado a confirmar",
    image: null,
    imageAlt: "",
    url: "projetos/cansat/",
  },
  {
    id: "fcp-01",
    lifecycle: "pending",
    name: "FCP-01",
    description:
      "Missão ADS-B e plataforma 2U indicadas no briefing. Informações técnicas em validação pela liderança.",
    category: "Projeto aeroespacial",
    technologies: ["ADS-B", "2U"],
    status: "Dados técnicos a confirmar",
    image: null,
    imageAlt: "",
    url: "projetos/fcp-01/",
  },
];
export interface ProjectDetail {
  title: string;
  eyebrow: string;
  status: string;
  intro: string;
  missionTitle: string;
  mission: string;
  specsTitle: string;
  specs: { title: string; text: string }[];
  subsystemsTitle: string;
  subsystems: { title: string; text: string }[];
  timelineTitle: string;
  timeline: { date: string | null; title: string; description: string }[];
  competitionTitle: string;
  competition: string;
  back: string;
}
export const fcp: ProjectDetail = {
  title: "FCP-01",
  eyebrow: "DESENVOLVIMENTO",
  status: "Conteúdo em validação",
  intro:
    "Conheça a estrutura do projeto FCP-01. Os campos abaixo aguardam o conteúdo técnico validado pela liderança.",
  missionTitle: "Missão ADS-B",
  mission:
    "Missão ADS-B indicada no briefing. Objetivos, operação e resultados esperados a confirmar.",
  specsTitle: "Especificações",
  specs: [
    {
      title: "Formato",
      text: "2U",
    },
    { title: "Massa", text: "A confirmar." },
    { title: "Dimensões", text: "A confirmar." },
  ],
  subsystemsTitle: "Subsistemas",
  subsystems: Array.from({ length: 7 }, (_, i) => ({
    title: `Subsistema ${i + 1} — a confirmar`,
    text: "Nome e descrição técnica aguardando validação.",
  })),
  timelineTitle: "Cronograma",
  timeline: [
    {
      date: null as string | null,
      title: "Marcos e datas a confirmar",
      description:
        "A liderança fornecerá as etapas de desenvolvimento e o cronograma oficial.",
    },
  ],
  competitionTitle: "CubeDesign 2026",
  competition:
    "Participação, categoria, datas e resultados a confirmar pela liderança.",
  back: "Todos os projetos",
};
