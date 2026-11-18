// Peças do FCP-01 para o explorador 3D.
// Geradas a partir da montagem SolidWorks por tools/export_groups.py
// (sldprt-export) — os ids correspondem aos nós do GLB em public/models/.
//
// explode: quanto a peça se afasta na vista explodida (0 = fica parada).
export type Fcp01Part = {
  id: string;
  label: string;
  color: string;
  description: string;
  explode: number;
  /** Casca: fica translúcida na vista explodida para revelar o interior. */
  shell?: boolean;
};

export const fcp01Parts: Fcp01Part[] = [
  {
    id: 'roda-reacao',
    label: 'Roda de reação',
    color: '#d9a441',
    description:
      'Conjunto motor + volante de inércia do ADCS. Acelerar ou frear o anel troca momento angular com o satélite, corrigindo a atitude sem gastar propelente.',
    explode: 1,
  },
  {
    id: 'eps-geracao',
    label: 'Placa EPS — geração',
    color: '#2f8f5b',
    description:
      'Placa de geração do EPS&TC: condiciona a energia vinda dos painéis solares, com regime de carga das baterias e proteção do barramento.',
    explode: 1,
  },
  {
    id: 'eps-reguladores',
    label: 'Placa EPS — reguladores',
    color: '#43a86e',
    description:
      'Placa de reguladores do EPS&TC: conversores DC-DC (XL4015) que derivam as tensões de operação dos demais subsistemas.',
    explode: 1,
  },
  {
    id: 'obc-ttc',
    label: 'Placa OBC e TT&C',
    color: '#3c86ad',
    description:
      'Computador de bordo e comunicação: microcontrolador ESP32 para telemetria, comandos e processamento, com conector SMA para a antena de RF.',
    explode: 1,
  },
  {
    id: 'payload',
    label: 'Placa do Payload',
    color: '#8a5cc4',
    description:
      'Carga útil da missão: receptora ADS-B, que identifica e acompanha aeronaves a partir dos sinais de transponder em 1090 MHz.',
    explode: 1,
  },
  {
    id: 'fixadores',
    label: 'Fixadores e espaçadores',
    color: '#788494',
    description:
      'Parafusos M2.5/M3, espaçadores e roscas que mantêm as placas empilhadas, definem o afastamento entre elas e travam a estrutura contra vibração.',
    explode: 0.85,
  },
  {
    id: 'estrutura',
    label: 'Estrutura (chassi 2U)',
    color: '#b8c2ce',
    description:
      'Chassi 2U em alumínio (10 × 10 × 19,6 cm): tampa superior, paredes vazadas para alívio de massa e trilhos de fixação dos subsistemas.',
    explode: 0,
    shell: true,
  },
];
