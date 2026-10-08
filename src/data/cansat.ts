export interface CansatContent {
  eyebrow: string;
  aboutTitle: string;
  about: string;
  facts: { title: string; text: string }[];
  technicalTitle: string;
  technical: string;
  back: string;
}
export const cansat: CansatContent = {
  eyebrow: "CubeDesign 2025",
  aboutTitle: "Sobre o projeto",
  about:
    "Projeto na categoria CanSat, associado ao CubeDesign 2025 no briefing da equipe.",
  facts: [
    { title: "Competição", text: "CubeDesign 2025" },
    { title: "Categoria", text: "CanSat" },
    {
      title: "Resultado citado no briefing",
      text: "1º lugar — aguardando confirmação da liderança e referência oficial.",
    },
  ],
  technicalTitle: "Informações técnicas",
  technical:
    "Objetivos, especificações, integrantes e registros do projeto aguardam informações validadas pela equipe.",
  back: "Todos os projetos",
};
