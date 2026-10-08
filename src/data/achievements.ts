export interface Achievement {
  id: string;
  year: string;
  competition: string;
  result: string;
  description: string;
}
export const achievements: Achievement[] = [
  {
    id: "cubedesign-2025",
    year: "2025",
    competition: "CubeDesign — CanSat",
    result: "Resultado em validação",
    description:
      "O briefing cita o 1º lugar em CanSat no CubeDesign 2025. Aguardando confirmação da liderança e referência oficial antes da publicação como conquista validada.",
  },
];
