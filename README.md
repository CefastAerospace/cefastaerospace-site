# CEFAST Aerospace

Landing page institucional em React, TypeScript, Vite, Tailwind CSS, Lucide React e Framer Motion. Sem backend.

## Executar

Requer Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

Produção: `npm run build`. Revisão do resultado: `npm run preview`.

## GitHub Pages

Repositório: `https://github.com/CefastAerospace/cefastaerospace-site`.
Branch de publicação: `landing-page`.
O workflow `.github/workflows/pages.yml` compila e publica a cada push nessa branch.
Em Settings → Pages, selecione GitHub Actions como Source antes do primeiro deploy.
Endereço previsto após a publicação: `https://cefastaerospace.github.io/cefastaerospace-site/`.

O Vite usa a base `/cefastaerospace-site/`. Para imagens de `public/` em componentes,
use `${import.meta.env.BASE_URL}arquivo.jpg` para preservar o prefixo do Pages.
Se o Windows bloquear o carregamento da configuração pelo esbuild, valide com
`npm run build -- --configLoader runner`.

## Conteúdo

- `src/data/site.ts`: navegação, história, missão, objetivos, indicadores e canais oficiais.
- `src/data/projects.ts`: projetos, imagens, tecnologias, categoria, status e links.
- `src/data/achievements.ts`: anos, competições, resultados e descrições.
- `src/data/team.ts`: integrantes, fotos, cargos, áreas, LinkedIn e GitHub.
- `src/data/sponsors.ts`: marcas e hierarquia de patrocinadores.

Os registros a confirmar são placeholders, não fatos sobre a equipe. Substitua-os antes de uma divulgação institucional definitiva. Links ausentes são `null` e não geram botões sem destino. Para e-mail, use `mailto:endereco-oficial` somente após confirmar o endereço. Imagens podem ser adicionadas a `public/` e referenciadas como `/arquivo.jpg`.

Logo original fornecida na conversa em `public/aerospace-logo.jpg`, preservada sem alterações. Favicon orbital simplificado em `public/favicon.svg`. Fontes Inter e Space Grotesk servidas localmente. A chamada “Engenharia que vai além” é provisória, conforme o briefing.

## Interface e acessibilidade

Navegação fixa, menu mobile com estado expandido e fechamento por Escape, links de seção, atalho para pular navegação, foco visível, HTML semântico e respeito a `prefers-reduced-motion`. Conteúdo não depende de animações para ficar visível. Não há formulários, coleta de dados, rastreadores ou integrações externas.

## Metadados

Título, descrição, idioma, cor do navegador, favicon e Open Graph básico em `index.html`. A imagem social personalizada não foi solicitada; a logo original permanece como asset da página. Atualize domínio e metadados caso publique em outro endereço.
