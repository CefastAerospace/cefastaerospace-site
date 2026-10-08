# Dados necessários para finalizar o site

A estrutura está implementada. Os campos pendentes não devem ser preenchidos com informações presumidas. Os arquivos abaixo ficam em `src/data/`; imagens locais devem ficar em `public/` e ser referenciadas sem o prefixo `public/`.

| Área                | Dados a fornecer                                                                                                                                           | Arquivo                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| História e missão   | Texto aprovado sobre origem, ano de fundação, trajetória, missão, princípios e objetivos                                                                   | `site.ts`: `about`                             |
| Indicadores         | Quantidade atual de membros, projetos, competições e anos de história; critério e data de referência                                                       | `site.ts`: `metrics`                           |
| Setores             | Descrição oficial de Administração, Controle & Energia, Embarcados, Mecânica e Pesquisa & Desenvolvimento                                                  | `team.ts`: `sectors`                           |
| Integrantes         | Nome, cargo, setor, foto autorizada e links profissionais opcionais                                                                                        | `team.ts`: `team`                              |
| Projetos            | Etapa real de cada projeto: `planned`, `active` ou `completed`; manter `pending` até confirmação. Resumo aprovado, tecnologias, imagem e texto alternativo | `projects.ts`: `projects`                      |
| FCP-01              | Validar ADS-B e formato 2U; fornecer objetivos, operação, massa, dimensões, nomes e descrições dos subsistemas                                             | `projects.ts`: `fcp`                           |
| Cronograma FCP-01   | Marcos, descrição e datas oficiais em formato ISO (`AAAA-MM-DD`); usar `null` quando desconhecidas                                                         | `projects.ts`: `fcp.timeline`                  |
| CubeDesign 2026     | Confirmação de participação, categoria, datas, situação e resultados, quando disponíveis                                                                   | `projects.ts`: `fcp.competition`               |
| CanSat e conquistas | Descrição técnica, integrantes, fotos, confirmação do resultado de 2025 e referência oficial                                                               | `cansat.ts`, `projects.ts` e `achievements.ts` |
| Patrocinadores      | Empresas confirmadas, categoria (`principal`, `patrocinador`, `apoiador`), logo autorizado e URL oficial                                                   | `sponsors.ts`: `sponsors`                      |
| Contatos            | Confirmar que as seis URLs atuais são os canais oficiais e que o e-mail recebe propostas de patrocínio                                                     | `site.ts`: `contacts`                          |

## Assets

- FCP-01: render ou foto do projeto, preferencialmente horizontal, com descrição alternativa. O mesmo asset será usado no destaque da home e no catálogo.
- CanSat: foto ou render horizontal com descrição alternativa.
- Equipe: retratos com enquadramento consistente e autorização de publicação.
- Patrocinadores: logos em SVG ou PNG transparente e eventuais regras de uso.

## O que não bloqueia a estrutura

- O contato funciona com links diretos e e-mail; um formulário externo é opcional. Se desejado, fornecer a URL definitiva.
- O CTA de patrocínio direciona para os canais de contato. Cotas, contrapartidas e apresentação comercial dependem da equipe e podem ser adicionadas depois.
- Filtros incluem estados vazios. Nenhum projeto foi declarado em desenvolvimento ou concluído sem confirmação.
- Subsistemas e cronograma têm placeholders: a quantidade e o conteúdo devem ser ajustados conforme a documentação técnica real.
