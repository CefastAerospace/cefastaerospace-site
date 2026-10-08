export const sectors = [
  {
    name: "Administração",
    description: "Descrição oficial do setor a confirmar.",
  },
  {
    name: "Controle & Energia",
    description: "Descrição oficial do setor a confirmar.",
  },
  {
    name: "Embarcados",
    description: "Descrição oficial do setor a confirmar.",
  },
  { name: "Mecânica", description: "Descrição oficial do setor a confirmar." },
  {
    name: "Pesquisa & Desenvolvimento",
    description: "Descrição oficial do setor a confirmar.",
  },
] as const;
export interface Member {
  id: string;
  name: string;
  role: string;
  area: (typeof sectors)[number]["name"] | null;
  photo: string | null;
  linkedin: string | null;
  github: string | null;
}
export const team: Member[] = [1, 2, 3, 4].map((n) => ({
  id: `membro-${n}`,
  name: "Integrante a confirmar",
  role: "Cargo a confirmar",
  area: null,
  photo: null,
  linkedin: null,
  github: null,
}));
