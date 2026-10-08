# CEFAST Aerospace

Site institucional em React, TypeScript e Vite MPA. As seis páginas reutilizam componentes, fontes, cores e estilos do site original. Sem backend.

## Executar localmente

Requer Node.js 22.13+ e npm.

```sh
npm install
npm run dev
npm run build
```

Abra http://127.0.0.1:5173/cefastaerospace-site/. Para conferir o build: `npm run preview`.

## Páginas

Todos os caminhos usam a base `/cefastaerospace-site/`:

- `/`: apresentação, história, métricas, projetos e conquistas.
- `/equipe/`: história, missão, objetivos, cinco setores, integrantes e conquistas.
- `/projetos/`: catálogo com acesso ao FCP-01.
- `/projetos/fcp-01/`: missão, especificações, sete subsistemas, cronograma e CubeDesign 2026.
- `/patrocinadores/`: categorias e oportunidades de parceria.
- `/contato/`: seis canais existentes.

Cada URL tem seu próprio `index.html`, título, descrição, canonical e Open Graph. Navbar e rodapé incluem acesso direto ao FCP-01. O menu destaca em azul somente a página atual. URLs sem barra final são redirecionadas para a versão com barra no desenvolvimento e no preview. Em hospedagem estática, mantenha os diretórios e seus arquivos `index.html` e habilite a resolução de diretórios (como no GitHub Pages).

## Verificações

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:smoke
```

O smoke inicia o preview na porta 4173 e verifica as seis URLs com/sem barra e com `index.html`, recarregamento, metadados sem JavaScript, imagem Open Graph, imagens/CSS/scripts/fontes, navbar/rodapé, destaque azul, menu mobile, cinco setores, sete subsistemas, patrocinadores vazios e os seis contatos. Testa larguras de 320, 390, 768, 1024 e 1440 pixels. Para usar um Chrome instalado, defina `CHROME_PATH` com o caminho do executável.

Para Lighthouse mobile, inicie o preview e execute em outro terminal:

```sh
npx lighthouse http://127.0.0.1:4173/cefastaerospace-site/ --chrome-flags="--headless=new" --output=html --output-path=./lighthouse.html
```

Repita para `projetos/fcp-01/`. Meta ≥ 90. Resultados locais não substituem a avaliação da hospedagem final.

## Conteúdo editável

- `src/data/copy.ts`: textos de interface e acessibilidade.
- `src/data/site.ts`: navegação, história, missão, objetivos, métricas e contatos.
- `src/data/projects.ts`: FCP-01 e catálogo de projetos.
- `src/data/team.ts`: setores confirmados pelo usuário e integrantes pendentes.
- `src/data/achievements.ts`: conquistas aguardando validação.
- `src/data/sponsors.ts`: patrocinadores e categorias.

ADS-B e 2U vieram do briefing; 2U aparece como formato do projeto, conforme `requisitos.md`. Detalhes da missão, massa, dimensões, nomes dos subsistemas, datas, métricas, integrantes e a conquista de 2025 continuam pendentes de conteúdo validado. Categorias sem patrocinadores confirmados exibem “Em captação”, conforme o requisito 16. Nenhuma categoria é cadastrada como empresa.

Para preencher o conteúdo sem alterar JSX: insira 2–3 parágrafos em `about[0].paragraphs`, 1–2 frases em `about[1].paragraphs`, objetivos em `about[2].items` e números oficiais em `metrics[].value`, todos em `src/data/site.ts`. Datas ISO, títulos e descrições do cronograma ficam em `fcp.timeline[].date/title/description`, em `src/data/projects.ts`. Valores ausentes permanecem vazios ou `null`.

Os seis contatos anteriores foram preservados e revisados. Instagram, Facebook, LinkedIn e GitHub responderam HTTP 200 e apresentaram o nome da equipe. YouTube respondeu HTTP 200, mas a identidade do canal não pôde ser confirmada pela resposta. O endereço de e-mail está sintaticamente correto; não foram enviados e-mails. Veja a evidência e as limitações no relatório.

Os metadados específicos estão nas entradas HTML. O sitemap usa o domínio previsto no README original; confirme antes de publicar. Open Graph reutiliza a logo original. No GitHub Pages de projeto, `robots.txt` fica sob a base do projeto; regras para todo o domínio exigem um arquivo na raiz do domínio.

## CI e publicação futura

Fluxo: **feature branch → Pull Request → CI → review → merge → main**. Não fazer commits diretos na `main`. A branch de publicação atual continua sendo `landing-page`; reconciliar esse fluxo com a `main` exige decisão e configuração do mantenedor.

`quality.yml` executa lint, build e smoke nos pull requests e pushes para `main` e `landing-page`. O workflow de Pages existente continua associado a `landing-page` e agora exige lint antes do build. Nenhum push, deploy ou ajuste remoto foi feito nesta entrega local.

Para impedir commits diretos, um administrador deve configurar um ruleset no GitHub para `main`: exigir pull request, aprovação, resolução das conversas e o check `quality`; impedir bypass, force push e exclusão. Proteja também `landing-page`, que publica o site atualmente, ou migre o fluxo deliberadamente. Arquivos locais não ativam proteção remota.

O Markdown fornecido pelo usuário foi preservado integralmente em `requisitos.md`. Veja `RELATORIO-CONFORMIDADE.md` para a auditoria, checklist individual, testes, Lighthouse e pendências com os arquivos responsáveis. `VALIDACAO.md` é o registro histórico da primeira versão.
