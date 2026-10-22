# CEFAST Aerospace — Site Institucional

Site da **CEFAST Aerospace**, equipe de competição e desenvolvimento aeroespacial do CEFET-MG (Campus II, Belo Horizonte).

## Propósito

Apresentar a equipe, divulgar seus projetos e trajetória (CanSat → CubeSat), e aproximar estudantes, apoiadores e patrocinadores. O site reúne informações sobre a Aerospace e facilita o acesso aos seus canais de contato e redes sociais.

## Estrutura (Multi-página)

| Rota | Página |
|------|--------|
| `/` | Início (Hero + destaques) |
| `/sobre` | História, missão, objetivos, métricas |
| `/projetos` | Grid de projetos (FCP-01, CanSat 2025) |
| `/projetos/fcp-01` | Página dedicada ao FCP-01 (subsistemas, specs, timeline, CubeDesign 2026) |
| `/conquistas` | Timeline de conquistas (CubeDesign 2025, OBSAT 2022, CubeDesign Virtual 2020, CubeDesign 2026) |
| `/equipe` | Grid por setores (Administração, Embarcados, Controle e Energia, P&D, Mecânica) |
| `/patrocinadores` | Tiers: Principal / Patrocinador / Apoiador (Gedai, SolidWorks, Cadence) |
| `/contato` | Links sociais, e-mail, telefone, endereço, CTA de parceria |

## Como rodar localmente

### Pré-requisitos

- **Node.js LTS** (v20+) — [nodejs.org](https://nodejs.org/)
- **npm** (vem com Node.js)
- **Git** — [git-scm.com](https://git-scm.com/)

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/CefastAerospace/cefastaerospace-site.git
cd cefastaerospace-site

# 2. Instalar dependências (usa package-lock.json para versões exatas)
npm ci

# 3. Iniciar servidor de desenvolvimento
npm run dev
# Abre em http://127.0.0.1:5173/cefastaerospace-site/
```

### Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor Vite com HMR (Hot Module Replacement) |
| `npm run build` | Build de produção (`tsc -b && vite build`) — gera pasta `dist/` |
| `npm run preview` | Preview local do build de produção |
| `npm test` | Executa testes unitários (Vitest + React Testing Library) |
| `npm run lint` | Executa ESLint (configurado no CI) |

## Build e Deploy (GitHub Pages)

O projeto já está configurado para **GitHub Pages** com base path `/cefastaerospace-site/`.

1. Push na branch `main` dispara o workflow CI (ESLint + Build + Testes)
2. O deploy para GitHub Pages pode ser configurado via *Settings → Pages → Deploy from branch* apontando para `gh-pages` ou via workflow separado
3. Arquivo `public/404.html` + script no `index.html` garantem deep-linking correto no GitHub Pages (SPA fallback)

## Critérios de Aceitação (Definition of Done)

- [ ] `npm ci` instala sem erros
- [ ] `npm run dev` sobe em < 5s e abre no navegador
- [ ] `npm run build` gera `dist/` sem erros de TypeScript ou Vite
- [ ] `npm test` → **todos os testes passam** (11+ testes)
- [ ] `npm run lint` → **zero erros** (warnings aceitos se justificados)
- [ ] Responsividade validada: 1440px, 1100px, 900px, 600px, 390px, 320px (sem overflow horizontal)
- [ ] Navegação: todos os links internos funcionam, menu mobile abre/fecha (clique + ESC)
- [ ] Acessibilidade: skip-link, focus-visible, ARIA landmarks, `prefers-reduced-motion`
- [ ] SEO: `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, `sitemap.xml`, `robots.txt`
- [ ] Lighthouse mobile ≥ 90 (Performance, Acessibilidade, Boas práticas, SEO)
- [ ] Compartilhamento WhatsApp/LinkedIn da home e `/projetos/fcp-01` renderiza preview correto
- [ ] Nenhum dado pessoal inventado — placeholders marcados como "a confirmar"

## Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19.1.0 | UI em componentes |
| TypeScript | 5.8.3 | Tipagem estrita |
| Vite | 6.3.0 | Dev server + build |
| Tailwind CSS | 4.1.0 | Estilos utilitários (via `@tailwindcss/vite`) |
| Framer Motion | 12.0.0 | Animações |
| Lucide React | 0.468.0 | Ícones |
| Fontsource | 5.2.0 | Fontes **Inter** + **Space Grotesk** locais |
| Vitest | 5.x | Testes unitários |
| React Testing Library | 16.x | Testes de componente |
| ESLint | 9.x | Linting (CI) |
| vite-plugin-sitemap | latest | Geração automática de `sitemap.xml` |

## Acessibilidade

- Skip link ("Pular para o conteúdo")
- Navegação por teclado completa (Tab, Enter, ESC)
- Focus visible em todos os elementos interativos
- ARIA landmarks (`main`, `nav`, `section`, `article`)
- `prefers-reduced-motion` respeitado (animações desativadas)
- Contraste de cores validado
- Textos alternativos em imagens

## Estrutura de Pastas

```
cefastaerospace-site/
├── index.html              # Entry point + SEO/OG tags + SPA fallback
├── package.json
├── vite.config.ts          # Config Vite + sitemap plugin
├── tsconfig.json           # TS strict mode
├── README.md
├── VALIDACAO.md            # Checklist de validação
├── public/
│   ├── robots.txt
│   ├── sponsors/           # Logos SolidWorks.svg, Cadence.svg
│   └── 404.html            # GitHub Pages SPA fallback
├── src/
│   ├── main.tsx            # Bootstrap React + fontes + CSS global
│   ├── App.tsx             # Rotas (react-router-dom v7)
│   ├── index.css           # Tailwind + tokens de design + responsividade
│   ├── components/         # 11 componentes de seção + Shared.tsx
│   ├── pages/              # 8 páginas (Inicio, Sobre, Projetos, FCP01, Conquistas, Equipe, Patrocinadores, Contato)
│   ├── data/               # Conteúdo tipado (fonte única da verdade)
│   │   ├── site.ts         # Nav, About, métricas, contatos
│   │   ├── projects.ts     # FCP-01 + CanSat 2025
│   │   ├── achievements.ts # 4 conquistas validadas
│   │   ├── team.ts         # 5 setores + placeholders de integrantes
│   │   └── sponsors.ts     # 3 tiers + 4 sponsors reais
│   ├── setupTests.ts       # Stubs jsdom (matchMedia, IntersectionObserver)
│   ├── App.test.tsx        # Testes de navegação, títulos, menu mobile
│   └── data/data.test.ts   # Testes de integridade dos dados
```

## Contato

- **E-mail:** cefastaerospace@gmail.com
- **Telefone:** +55 31 99741-6439
- **Instagram:** [@cefastaerospace](https://instagram.com/cefastaerospace)
- **LinkedIn:** [CEFAST Aerospace](https://linkedin.com/company/cefast-aerospace)
- **GitHub:** [CefastAerospace](https://github.com/CefastAerospace)
- **Endereço:** CEFET-MG Campus II, Av. Amazonas 7675, Nova Gameleira, Belo Horizonte — MG, Brasil
