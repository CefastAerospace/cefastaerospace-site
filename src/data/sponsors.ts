export interface Sponsor {
  id: string;
  name: string;
  logo: string | null;
  url: string | null;
  description?: string;
  tier: "principal" | "patrocinador" | "apoiador";
}
export const sponsorTiers = [
  { id: "principal", label: "Patrocinadores principais" },
  { id: "patrocinador", label: "Patrocinadores" },
  { id: "apoiador", label: "Apoiadores" },
] as const;
// Somente empresas confirmadas entram nesta lista. Categorias vazias exibem o status.
export const sponsors: Sponsor[] = [];
