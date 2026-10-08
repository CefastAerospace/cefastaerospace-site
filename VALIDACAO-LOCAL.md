# Validação local — 7 de outubro de 2026

## Implementado

- Seis entradas HTML reais via Vite MPA, preservando a base do GitHub Pages.
- Componentes e identidade visual reaproveitados; menu ativo azul e `aria-current`.
- Setores: Administração, Controle & Energia, Embarcados, Mecânica, Pesquisa & Desenvolvimento.
- FCP-01 com sete espaços para subsistemas e demais campos solicitados.
- Textos da interface concentrados em `src/data/`.
- Open Graph, canonical, sitemap e robots; imagem usa a logo existente.
- ESLint e workflow de qualidade com build e smoke.
- Build e ESLint aprovados; oito testes smoke aprovados, incluindo as seis URLs e mobile.

## Pendências para publicação

- Conteúdo validado do líder: história, missão, objetivos, métricas, descrições dos setores, integrantes, especificações, sete subsistemas, cronograma e CubeDesign 2026.
- Confirmação do resultado de CanSat no CubeDesign 2025.
- Patrocinadores por categoria ou confirmação explícita de “em captação”.
- Validação dos seis canais de contato existentes pela liderança.
- Confirmar domínio e prévias reais da home e FCP-01 no WhatsApp/LinkedIn após disponibilizar uma URL pública autorizada. Localhost não é acessível aos robôs dessas plataformas.
- Configurar proteção de branches no GitHub; instruções preparadas no README.
- `requisitos.md` não foi encontrado. O checklist original precisa ser fornecido para conferência integral.
- Publicação fora do escopo desta revisão local.

## Lighthouse mobile local

Home: desempenho 95, acessibilidade 96, boas práticas 100, SEO 100. Relatório em reports/lighthouse-home.json (ignorado pelo Git).
FCP-01: desempenho 97, acessibilidade 98, boas práticas 100, SEO 100. Relatório em reports/lighthouse-fcp-01.json (ignorado pelo Git).
