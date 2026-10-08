# Relatório de conformidade

Auditoria realizada em 7 de outubro de 2026 contra `requisitos.md`.

## Concluído

- Identidade visual preservada: logo, paleta, fontes, componentes, cards, botões, navbar, footer, ícones, animações e responsividade foram reaproveitados.
- Vite MPA com as seis páginas: `/`, `/equipe/`, `/projetos/`, `/projetos/fcp-01/`, `/patrocinadores/` e `/contato/`.
- Navegação da navbar, footer, CTAs, acesso direto, recarregamento e URLs sem barra final com redirecionamento no dev/preview.
- Link direto para FCP-01 na navegação; página FCP-01 fica associada a Projetos no estado ativo.
- Dados fixos importantes separados em `src/data/`.
- Exatamente cinco setores cadastrados: Administração, Controle & Energia, Embarcados, Mecânica e Pesquisa & Desenvolvimento.
- Estrutura da equipe para história, missão, objetivos, métricas e descrições dos setores.
- Estrutura do FCP-01 para missão ADS-B, 2U, massa, dimensões, sete subsistemas, timeline alimentada por dados e CubeDesign 2026.
- Categorias de patrocinadores sem empresas confirmadas exibem `Em captação`; nenhuma empresa fictícia foi cadastrada.
- Seis contatos preservados com texto, ícone e destino.
- `title`, description, canonical, `og:title`, `og:description`, `og:image`, `og:url` e `og:type` nas seis entradas HTML.
- `public/sitemap.xml` com seis URLs e `public/robots.txt` apontando para o sitemap.
- README com `npm install`, `npm run dev`, `npm run build`, lint, smoke, Lighthouse e fluxo de Pull Request.
- ESLint funcionando e executado nos workflows de Pages e Quality; build também executado no CI.
- Testes smoke: 10 passaram. Eles cobrem navegação, acesso direto, reload, assets, metadados, links, menu mobile e larguras 320/390/768/1024/1440.
- Lighthouse mobile local: home 94/100/100/100; equipe 97/100/100/100; projetos 97/100/100/100; FCP-01 97/100/100/100; patrocinadores 94/100/100/100; contato 97/100/100/100. Ordem: Performance/Acessibilidade/Boas práticas/SEO.

## Parcialmente concluído

- CubeDesign 2025 / 1º lugar CanSat está apresentado como `Resultado em validação`, porque a mensagem do líder é uma solicitação de confirmação e não uma fonte institucional verificável.
- SEO e Open Graph estão tecnicamente preparados com o domínio previsto no README anterior (`cefastaerospace.github.io/cefastaerospace-site`). O domínio precisa ser confirmado antes da publicação.
- Links de contato foram testados por HTTP: Instagram, Facebook, LinkedIn, YouTube e GitHub responderam. YouTube respondeu, mas o nome do canal não pôde ser confirmado automaticamente; o e-mail não foi enviado para testar a caixa.

## Pendente de conteúdo ou ação externa

- Inserir 2–3 parágrafos de história, 1–2 frases de missão e objetivos validados em `src/data/site.ts`.
- Inserir números oficiais de membros, projetos, competições e anos em `metrics[].value` em `src/data/site.ts`.
- Inserir descrições oficiais dos cinco setores em `src/data/team.ts`.
- Inserir massa, dimensões, nomes e descrições dos sete subsistemas, datas e eventos da timeline e dados oficiais do CubeDesign 2026 em `src/data/projects.ts`.
- Confirmar e, se aprovado, alterar a conquista CubeDesign 2025 para 1º lugar CanSat em `src/data/achievements.ts`.
- Inserir patrocinadores reais, categorias, logos, descrições e links em `src/data/sponsors.ts`.
- Confirmar titularidade e atualidade dos seis contatos em `src/data/site.ts`.
- Configurar ruleset/proteção da `main` e, se necessário, da `landing-page` nas configurações do GitHub. Isso é administrativo e não foi simulado como concluído.
- Validar prévias reais no WhatsApp/LinkedIn após uma URL pública; localhost não é acessível aos robôs dessas plataformas.
- Publicar o site somente após a revisão do conteúdo e configuração do repositório.

## Observações

- `requisitos.md` foi preservado no projeto a partir do Markdown fornecido.
- Não foi encontrado outro `requisitos.md` previamente existente.
- Nenhum dado pessoal, métrica, patrocinador, resultado, data, dimensão ou subsistema foi inventado.
