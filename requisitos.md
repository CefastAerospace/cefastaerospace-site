# AEROSPACE — Implementação das alterações solicitadas pelo líder

## Objetivo

Implementar no site da equipe **AEROSPACE** todas as alterações solicitadas pelo líder, preservando integralmente a identidade visual, os componentes, o conteúdo válido e as informações já construídas no projeto.

O trabalho deve ser feito sobre o projeto existente.

**Não fazer redesign.**

**Não substituir a identidade visual atual.**

**Não apagar informações existentes que já estejam corretas.**

**Não inventar informações que não estejam disponíveis ou validadas.**

---

# 1. REGRA PRINCIPAL — PRESERVAR O SITE EXISTENTE

Antes de modificar qualquer arquivo:

1. Analise completamente o repositório.
2. Entenda a arquitetura atual.
3. Identifique todos os componentes existentes.
4. Identifique os estilos existentes.
5. Identifique as páginas/seções existentes.
6. Identifique os dados e informações já cadastrados.
7. Identifique as imagens e assets existentes.
8. Identifique as configurações do Vite.
9. Identifique scripts do `package.json`.
10. Identifique configuração de ESLint e CI, se existir.
11. Identifique o `requisitos.md`, se existir.
12. Execute o projeto e verifique o estado atual antes das alterações.

### Preservar obrigatoriamente

- identidade visual;
- logo;
- cores;
- tipografia;
- espaçamentos;
- estilo dos cards;
- botões;
- navbar;
- footer;
- ícones;
- imagens;
- animações;
- efeitos;
- responsividade;
- linguagem visual;
- componentes já existentes;
- informações já construídas e válidas.

### Não fazer

- redesign;
- troca de paleta;
- troca de tipografia sem necessidade;
- criação de um novo layout;
- substituição dos componentes existentes por componentes genéricos;
- remoção de funcionalidades existentes;
- remoção de informações válidas;
- criação de dados fictícios.

A nova estrutura deve **reaproveitar o máximo possível do código existente**.

---

# 2. AUDITORIA INICIAL

Antes da implementação, faça uma auditoria do projeto.

Verifique:

```text
framework
Vite
estrutura de diretórios
componentes
páginas
rotas
CSS
assets
imagens
fontes
dados
package.json
scripts
ESLint
GitHub Actions
README
requisitos.md
```

Execute, quando disponíveis:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Caso algum comando não exista, não invente um resultado.

Identifique o que precisa ser criado e o que já existe.

---

# 3. NOVA ESTRUTURA DE PÁGINAS — VITE MPA

Converter as principais seções do site em páginas independentes utilizando **Vite MPA — Multi-Page Application**.

As URLs finais devem ser:

```text
/
 /equipe
 /projetos
 /projetos/fcp-01
 /patrocinadores
 /contato
```

## Páginas obrigatórias

### Home

```text
/
```

### Equipe

```text
/equipe
```

### Projetos

```text
/projetos
```

### Projeto FCP-01

```text
/projetos/fcp-01
```

### Patrocinadores

```text
/patrocinadores
```

### Contato

```text
/contato
```

---

## Regras da arquitetura MPA

Reaproveitar os componentes existentes.

Não duplicar componentes desnecessariamente.

Criar componentes compartilhados quando necessário.

Exemplos:

```text
Header
Navbar
Footer
Button
Card
Section
Timeline
ProjectCard
SponsorCard
```

Os nomes devem seguir a convenção já utilizada no projeto.

Cada página deve utilizar os mesmos componentes visuais existentes sempre que possível.

---

# 4. NAVEGAÇÃO

A navbar deve permitir navegar entre:

```text
/
 /equipe
 /projetos
 /projetos/fcp-01
 /patrocinadores
 /contato
```

Verificar:

- links da navbar;
- links do footer;
- links internos;
- botões;
- links para projetos;
- links de contato;
- caminhos relativos;
- assets;
- imagens;
- CSS;
- scripts.

A navegação deve funcionar:

1. clicando nos links;
2. acessando diretamente cada URL;
3. atualizando a página;
4. após o build de produção.

---

# 5. CORREÇÃO DOS SETORES

O site atualmente possui **7 setores incorretos**.

Corrigir para os **5 setores oficiais da equipe AEROSPACE**.

## IMPORTANTE

Não inventar os nomes dos setores.

Antes de alterar:

1. procurar os 5 setores corretos no repositório;
2. procurar no `README`;
3. procurar em `requisitos.md`;
4. procurar em arquivos de dados;
5. procurar em documentação existente;
6. procurar em componentes existentes.

Se os 5 nomes oficiais estiverem disponíveis, utilizar exatamente os nomes oficiais.

Se não estiverem disponíveis:

- preparar a estrutura para exatamente 5 setores;
- não inventar nomes;
- registrar a pendência no relatório final.

Cada setor deve possuir:

```text
nome
descrição de aproximadamente 1 linha
```

---

# 6. ESTRUTURA DE DADOS

Mover os textos e informações fixas importantes do JSX para uma pasta:

```text
data/
```

A estrutura pode ser adaptada à arquitetura atual.

Exemplo:

```text
data/
├── equipe.*
├── projetos.*
├── fcp01.*
├── conquistas.*
├── patrocinadores.*
└── contato.*
```

Pode utilizar:

```text
.js
.ts
.json
```

conforme a tecnologia já utilizada no projeto.

## Objetivo

Separar:

```text
dados
```

de:

```text
apresentação
```

Isso deve facilitar futuramente a criação da versão em inglês.

---

# 7. CONTEÚDO DA EQUIPE

A página:

```text
/equipe
```

deve possuir estrutura para apresentar o conteúdo validado pelo líder.

## História

Adicionar uma seção de história da equipe com:

```text
2–3 parágrafos
```

Não inventar a história.

Utilizar informações existentes no projeto ou conteúdo validado disponível.

---

## Missão

Adicionar:

```text
1–2 frases
```

Não inventar.

---

## Objetivos

Adicionar uma seção de objetivos.

Os objetivos devem ser apresentados de forma organizada e visualmente compatível com o site atual.

Não inventar objetivos.

---

# 8. MÉTRICAS DA EQUIPE

A página da equipe deve possuir estrutura para apresentar os números oficiais:

```text
membros
projetos
competições
anos
```

Exemplo estrutural:

```text
+XX membros
+XX projetos
XX competições
XX anos
```

Porém:

**NÃO INVENTAR OS NÚMEROS.**

Utilizar os números encontrados em conteúdo oficial existente.

Se algum número não estiver disponível:

- não utilizar número fictício;
- deixar o campo preparado;
- registrar a pendência.

---

# 9. FCP-01

Criar/preencher a página:

```text
/projetos/fcp-01
```

A página deve apresentar o projeto FCP-01 de forma completa.

Reaproveitar a identidade visual existente.

---

## 9.1 Missão ADS-B

Adicionar a descrição da missão:

```text
missão ADS-B
```

Não inventar detalhes técnicos.

Utilizar informações oficiais disponíveis no projeto.

---

# 10. ESPECIFICAÇÕES DO FCP-01

Apresentar:

```text
2U
massa
dimensões
```

O tamanho:

```text
2U
```

deve ser apresentado como informação do projeto.

Para:

```text
massa
dimensões
```

usar somente valores oficiais encontrados no projeto/documentação.

**Não inventar valores.**

---

# 11. SUBSISTEMAS DO FCP-01

O FCP-01 deve apresentar os **7 subsistemas**.

Cada subsistema deve possuir:

```text
nome
descrição de aproximadamente 1 linha
```

Antes de preencher:

1. procurar os 7 subsistemas no repositório;
2. procurar documentação;
3. procurar `README`;
4. procurar arquivos de projeto;
5. procurar dados existentes.

**Não inventar os 7 subsistemas.**

Se os dados não estiverem disponíveis:

- criar estrutura para 7 itens;
- não inventar nomes;
- registrar os campos como pendentes;
- informar isso no relatório final.

---

# 12. TIMELINE DO FCP-01

Criar uma timeline visual para o FCP-01.

Reaproveitar os estilos/componentes existentes.

A timeline deve ser alimentada por dados.

Não colocar todas as informações diretamente no JSX.

Estrutura sugerida:

```text
data/fcp01.*
```

com eventos contendo:

```text
data
título
descrição
```

Não inventar datas.

Utilizar somente datas oficiais disponíveis.

---

# 13. CUBEDESIGN 2026

Adicionar uma seção específica sobre:

```text
CubeDesign 2026
```

A seção deve apresentar os dados oficiais disponíveis sobre a participação/projeto.

Não inventar:

- resultados;
- colocação;
- premiação;
- datas;
- categorias;
- números;
- características do projeto.

Se os dados não estiverem disponíveis no repositório:

- deixar a estrutura pronta;
- registrar como pendência.

---

# 14. CONQUISTAS

Criar ou adaptar a seção de conquistas.

Deve existir a conquista validada:

```text
CubeDesign 2025
1º lugar
CanSat
```

Apresentar de maneira visualmente coerente com o site.

---

## Outras conquistas

Pesquisar no projeto se existem outras conquistas oficialmente registradas.

Se houver:

- adicionar.

Se não houver:

- não inventar.

---

# 15. PATROCINADORES

Criar/adaptar a página:

```text
/patrocinadores
```

Os patrocinadores devem ser apresentados por categoria.

Utilizar somente patrocinadores reais e confirmados.

Cada patrocinador pode possuir:

```text
nome
categoria
logo
descrição
site/link oficial
```

quando essas informações estiverem disponíveis.

---

# 16. CATEGORIAS SEM PATROCINADOR

Se uma categoria ainda não possuir patrocinador confirmado:

mostrar explicitamente:

```text
Em captação
```

ou texto equivalente.

Não inventar patrocinadores.

Não utilizar empresas fictícias.

Não transformar uma categoria em patrocinador apenas para preencher espaço visual.

---

# 17. LINKS DOS PATROCINADORES

Validar os links existentes.

Verificar:

- URL correta;
- destino;
- funcionamento;
- texto;
- ícone;
- relação com o patrocinador.

Não substituir por URLs genéricas.

Não inventar URLs.

---

# 18. PÁGINA DE CONTATO

Criar/adaptar:

```text
/contato
```

Reaproveitar o layout existente.

Validar os **6 links de contato** solicitados pelo líder.

Para cada um verificar:

```text
URL
texto
ícone
destino
funcionamento
```

Não inventar links.

Caso um link não possa ser validado, registrar como pendência.

---

# 19. SEO

Implementar as melhorias básicas de SEO.

Cada página deve possuir:

```text
<title>
<meta name="description">
<link rel="canonical">
```

quando apropriado.

Não alterar desnecessariamente textos já existentes.

---

# 20. OPEN GRAPH

Implementar:

```text
og:title
og:description
og:image
og:url
og:type
```

quando apropriado.

---

## og:image

Utilizar uma imagem institucional já existente.

Não criar uma nova identidade visual.

Verificar:

- caminho;
- formato;
- carregamento;
- URL utilizada no build final.

---

## og:url

Configurar URLs corretas para cada página.

Não inventar domínio.

Utilizar o domínio oficial configurado no projeto.

---

# 21. SITEMAP

Criar:

```text
sitemap.xml
```

O sitemap deve incluir as 6 páginas:

```text
/
 /equipe
 /projetos
 /projetos/fcp-01
 /patrocinadores
 /contato
```

Utilizar o domínio oficial do site.

Não inventar domínio.

---

# 22. ROBOTS.TXT

Criar:

```text
robots.txt
```

Permitir indexação das páginas públicas.

Adicionar referência ao sitemap.

Exemplo estrutural:

```text
User-agent: *
Allow: /

Sitemap: URL_DO_SITEMAP
```

Substituir `URL_DO_SITEMAP` pelo domínio oficial real do projeto.

---

# 23. README

Atualizar o:

```text
README.md
```

O README deve possuir obrigatoriamente os comandos:

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

Também documentar, se aplicável:

```bash
npm run lint
```

e outros comandos existentes.

---

# 24. README — FLUXO DE DESENVOLVIMENTO

Documentar o fluxo recomendado:

```text
feature branch
       ↓
Pull Request
       ↓
CI
       ↓
review
       ↓
merge
       ↓
main
```

O objetivo é evitar commits diretos na `main`.

---

# 25. ESLINT

Verificar se o projeto já possui ESLint.

Se existir:

- preservar a configuração atual;
- corrigir problemas necessários;
- garantir que funcione.

Se não existir:

- adicionar configuração adequada ao projeto;
- adicionar script no `package.json`.

Exemplo:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Adaptar à arquitetura real do projeto.

Não utilizar configurações excessivamente permissivas apenas para fazer o lint passar.

---

# 26. CI

Verificar se existe GitHub Actions.

Caso exista:

- reaproveitar a configuração;
- adicionar lint;
- adicionar build.

O CI deve executar pelo menos:

```bash
npm run lint
npm run build
```

Se necessário, executar instalação das dependências antes.

---

# 27. PROTEÇÃO DA MAIN

O objetivo do projeto é impedir commits diretos na `main`.

Fluxo esperado:

```text
branch
↓
Pull Request
↓
CI
↓
review
↓
merge
```

Não realizar alterações administrativas no GitHub sem autorização.

Se a proteção da `main` precisar ser configurada manualmente nas configurações do GitHub:

- não fingir que foi configurada;
- documentar como pendência;
- explicar no relatório final quais regras devem ser ativadas.

---

# 28. SMOKE TEST

Realizar teste de navegação das 6 URLs:

```text
/
 /equipe
 /projetos
 /projetos/fcp-01
 /patrocinadores
 /contato
```

Verificar:

- carregamento;
- navegação;
- navbar;
- footer;
- links;
- imagens;
- CSS;
- JavaScript;
- ausência de erros críticos;
- acesso direto às URLs;
- funcionamento após build.

---

# 29. TESTE RESPONSIVO

Testar principalmente a versão mobile.

Verificar:

```text
navbar
hero
cards
textos
imagens
timeline
patrocinadores
contato
footer
```

Corrigir problemas introduzidos pela nova estrutura.

Não redesenhar o site.

---

# 30. LIGHTHOUSE

Executar Lighthouse em modo mobile.

Meta:

```text
≥ 90
```

Avaliar:

```text
Performance
Accessibility
Best Practices
SEO
```

Corrigir problemas possíveis sem alterar a identidade visual.

Dar atenção especial a:

- imagens;
- dimensões de imagens;
- carregamento;
- fontes;
- acessibilidade;
- headings;
- links;
- contraste;
- meta tags;
- SEO.

---

# 31. COMPARTILHAMENTO — HOME

Validar tecnicamente o compartilhamento da:

```text
/
```

Verificar:

```text
title
description
og:title
og:description
og:image
og:url
```

O objetivo é que a prévia de compartilhamento fique correta em:

```text
WhatsApp
LinkedIn
```

Se não for possível validar o preview real no ambiente local:

- validar os metadados;
- registrar a limitação.

---

# 32. COMPARTILHAMENTO — FCP-01

Validar tecnicamente:

```text
/projetos/fcp-01
```

Verificar:

```text
title
description
og:title
og:description
og:image
og:url
```

O objetivo é que a página possua uma prévia correta quando compartilhada em:

```text
WhatsApp
LinkedIn
```

---

# 33. REQUISITOS

Localizar:

```text
requisitos.md
```

ou arquivo equivalente.

Utilizar esse arquivo como referência para o checklist final.

Não remover requisitos.

Não alterar critérios sem justificativa.

Ao final, verificar cada requisito.

Classificar cada item como:

```text
CONCLUÍDO
PARCIALMENTE CONCLUÍDO
PENDENTE
```

---

# 34. NÃO INVENTAR INFORMAÇÕES

Esta é uma regra obrigatória.

Nunca inventar:

- setores;
- subsistemas;
- nomes;
- números;
- membros;
- projetos;
- competições;
- anos;
- massa;
- dimensões;
- resultados;
- patrocinadores;
- empresas;
- links;
- contatos;
- conquistas;
- datas;
- dados do CubeDesign;
- informações técnicas do FCP-01.

Quando uma informação estiver ausente:

```text
não inventar
```

Em vez disso:

1. criar a estrutura necessária;
2. deixar o campo preparado;
3. registrar a pendência;
4. informar exatamente onde o dado deverá ser inserido.

---

# 35. NÃO REMOVER FUNCIONALIDADES

Antes de remover qualquer código:

1. verificar se está sendo utilizado;
2. verificar se possui dependências;
3. verificar se afeta outra página;
4. verificar se possui função visual;
5. verificar se faz parte de alguma funcionalidade existente.

Não remover funcionalidades existentes apenas para simplificar a implementação.

---

# 36. COMPONENTIZAÇÃO

Sempre que possível:

```text
dados → data/
componentes → components/
páginas → pages/ ou estrutura equivalente
estilos → estrutura atual do projeto
assets → estrutura atual do projeto
```

Não obrigatoriamente seguir essa estrutura se ela for incompatível com o projeto atual.

A arquitetura existente deve ser respeitada.

---

# 37. ORDEM DE IMPLEMENTAÇÃO

Executar o trabalho nesta ordem:

## Fase 1 — Auditoria

- analisar projeto;
- executar build;
- executar lint;
- identificar estrutura;
- identificar informações existentes.

## Fase 2 — Arquitetura

- implementar Vite MPA;
- criar 6 páginas;
- reaproveitar componentes;
- corrigir navegação.

## Fase 3 — Dados

- criar `data/`;
- separar conteúdo do JSX;
- preparar estrutura para conteúdo real.

## Fase 4 — Equipe

- história;
- missão;
- objetivos;
- 5 setores;
- métricas.

## Fase 5 — FCP-01

- missão ADS-B;
- especificações;
- 7 subsistemas;
- timeline;
- CubeDesign 2026.

## Fase 6 — Conquistas

- CubeDesign 2025;
- 1º lugar CanSat;
- outras conquistas somente se confirmadas.

## Fase 7 — Patrocinadores

- categorias;
- patrocinadores reais;
- status "em captação";
- links.

## Fase 8 — Contato

- 6 links;
- validação;
- correção de links existentes.

## Fase 9 — SEO

- meta tags;
- Open Graph;
- og:image;
- og:url;
- sitemap;
- robots.txt.

## Fase 10 — Qualidade

- README;
- ESLint;
- CI;
- documentação do fluxo de PR.

## Fase 11 — Testes

- build;
- lint;
- smoke test;
- navegação;
- mobile;
- Lighthouse;
- compartilhamento.

## Fase 12 — Aceitação

- revisar `requisitos.md`;
- verificar checklist;
- listar pendências;
- preparar projeto para publicação.

---

# 38. CRITÉRIOS DE ACEITAÇÃO

A implementação será considerada concluída somente se:

- [ ] identidade visual preservada;
- [ ] informações válidas existentes preservadas;
- [ ] 6 páginas implementadas;
- [ ] Vite MPA funcionando;
- [ ] `/` funcionando;
- [ ] `/equipe` funcionando;
- [ ] `/projetos` funcionando;
- [ ] `/projetos/fcp-01` funcionando;
- [ ] `/patrocinadores` funcionando;
- [ ] `/contato` funcionando;
- [ ] navegação entre as páginas funcionando;
- [ ] acesso direto às URLs funcionando;
- [ ] exatamente 5 setores;
- [ ] dados separados do JSX;
- [ ] página da equipe preparada;
- [ ] história preparada;
- [ ] missão preparada;
- [ ] objetivos preparados;
- [ ] métricas preparadas;
- [ ] FCP-01 preparado;
- [ ] missão ADS-B preparada;
- [ ] especificações 2U preparadas;
- [ ] massa preparada sem informação fictícia;
- [ ] dimensões preparadas sem informação fictícia;
- [ ] 7 subsistemas preparados;
- [ ] timeline preparada;
- [ ] CubeDesign 2026 preparado;
- [ ] conquista CubeDesign 2025 / 1º lugar CanSat apresentada quando validada;
- [ ] patrocinadores estruturados;
- [ ] categorias estruturadas;
- [ ] status "em captação" disponível;
- [ ] 6 links de contato revisados;
- [ ] `og:image` configurado;
- [ ] `og:url` configurado;
- [ ] Open Graph configurado;
- [ ] `sitemap.xml` criado;
- [ ] `robots.txt` criado;
- [ ] README atualizado;
- [ ] `npm install` documentado;
- [ ] `npm run dev` documentado;
- [ ] `npm run build` documentado;
- [ ] ESLint funcionando;
- [ ] ESLint executado no CI;
- [ ] build executado no CI;
- [ ] fluxo de Pull Request documentado;
- [ ] proteção da main configurada ou documentada como pendência administrativa;
- [ ] smoke test realizado;
- [ ] mobile verificado;
- [ ] Lighthouse executado;
- [ ] meta de 90+ buscada;
- [ ] compartilhamento da Home validado;
- [ ] compartilhamento do FCP-01 validado;
- [ ] `requisitos.md` revisado;
- [ ] nenhuma informação fictícia adicionada.

---

# 39. REGRA SOBRE CONTEÚDO QUE NÃO ESTIVER DISPONÍVEL

Caso o líder tenha solicitado uma informação que não esteja disponível no repositório:

**não interromper toda a implementação.**

Continuar implementando todas as partes possíveis.

Criar a estrutura para receber a informação posteriormente.

No final, criar:

```text
## Pendências de conteúdo
```

E listar:

```text
1. Informação necessária
2. Onde ela será utilizada
3. Arquivo responsável
4. Motivo pelo qual não foi preenchida
```

---

# 40. RELATÓRIO FINAL OBRIGATÓRIO

Ao terminar, apresentar um relatório final objetivo.

## 40.1 Alterações implementadas

Listar as principais alterações.

## 40.2 Arquivos criados

Listar os novos arquivos.

## 40.3 Arquivos modificados

Listar os principais arquivos modificados.

## 40.4 Testes

Informar:

```text
npm install: PASSOU/FALHOU
npm run lint: PASSOU/FALHOU
npm run build: PASSOU/FALHOU
Smoke test: PASSOU/FALHOU
```

Não inventar resultados.

## 40.5 Lighthouse

Informar as pontuações reais encontradas.

## 40.6 SEO

Informar:

```text
og:image
og:url
sitemap.xml
robots.txt
```

## 40.7 CI

Informar:

```text
ESLint
Build
GitHub Actions
```

## 40.8 Pendências

Listar somente o que realmente depende de validação externa.

## 40.9 Informações que NÃO puderam ser confirmadas

Separar claramente qualquer dado que ainda dependa do líder.

---

# 41. RESULTADO ESPERADO

Ao final, o projeto deverá possuir:

```text
AEROSPACE
│
├── /
├── /equipe
├── /projetos
├── /projetos/fcp-01
├── /patrocinadores
└── /contato
```

com:

```text
identidade visual preservada
        +
componentes reaproveitados
        +
Vite MPA
        +
dados separados do JSX
        +
conteúdo real
        +
FCP-01 estruturado
        +
5 setores corretos
        +
conquistas
        +
patrocinadores
        +
contatos
        +
SEO
        +
Open Graph
        +
sitemap
        +
robots.txt
        +
README
        +
ESLint
        +
CI
        +
smoke test
        +
Lighthouse
```

## REGRA FINAL

**Prioridade máxima: preservar o trabalho já realizado e implementar somente as alterações necessárias.**

Se houver conflito entre uma alteração solicitada e a identidade visual existente, **preservar a identidade visual e adaptar a implementação tecnicamente**.

Se houver conflito entre preencher um dado e a falta de uma fonte oficial, **não inventar o dado**.

Se um componente existente puder ser reutilizado, **reutilizar em vez de criar outro equivalente**.

O resultado deve parecer uma evolução natural do site atual da AEROSPACE, e não um site novo.