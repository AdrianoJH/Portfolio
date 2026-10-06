# CLAUDE.md — Portfólio do Adriano

Guia do projeto para o Claude Code. Leia antes de mexer em qualquer coisa.

## ⚠️ Regras de trabalho (obrigatórias)

1. **Sempre apresente uma lista de tarefas para aprovação antes de executar.** Antes de
   implementar qualquer mudança não-trivial, descreva o plano em tópicos (o que será feito,
   em quais arquivos) e **espere o OK** do Adriano. Nada de sair editando direto.
2. **Só commite e pushe quando ele pedir explicitamente.** Pode editar arquivos, rodar
   build/testes e deixar tudo pronto, mas `git commit`/`git push` só acontecem sob pedido
   direto ("commita", "pusha", "sobe pra main"). Na dúvida, pergunte.
3. Trabalhe sempre na `main` (repo pessoal `AdrianoJH/Portfolio`); a Vercel faz deploy
   automático a cada push.
4. Mensagens de commit terminam com:
   `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`

## O que é

Portfólio pessoal (site único, PT/EN/ES) de um desenvolvedor full stack. Hospedado na
Vercel sob o domínio **adrianorsouza.dev**. Foco editorial/autoral, com cases reais —
inclusive de plataformas privadas que não podem ser mostradas publicamente (por isso as
páginas de case detalham front **e** back-end).

## Stack

- **Next.js 14.2.35** (App Router) + **React 18.3** + **TypeScript 5.5**
- **styled-components 6.5.3** (transform via SWC; registry de SSR próprio)
- **nodemailer 10** (formulário de contato via API Route → SMTP)
- Fontes: **Space Grotesk** (headings) + **Inter** (corpo) via `next/font/google`
- Deploy: **Vercel**, Node **22.x** (fixado em `engines`)

## Comandos

```bash
npm run dev      # dev server
npm run build    # build de produção (valida SSR do styled-components)
npm run lint     # eslint-config-next
npx tsc --noEmit # type-check (use quando o build estiver travado por lock do .next)
```

Validação antes de dar algo por pronto: **`npx tsc --noEmit` + `npm run build`**.
(Se `npm run build` der `EPERM` em `.next/trace`, é dev server segurando o lock — pare o
dev server ou use `tsc --noEmit`.)

## Estrutura

```
src/
  app/                     # App Router (rotas, layout, metadata, api)
    layout.tsx             # fontes (next/font), <Providers>, Header/Footer, metadata/SEO
    page.tsx               # home (seções)
    projetos/page.tsx      # grade de projetos
    projetos/[slug]/page.tsx  # case study (SSG — generateStaticParams)
    api/contact/route.ts   # POST do formulário → nodemailer/SMTP
    icon.svg, apple-icon.png  # favicon (letra A + ponto azul)
  components/
    ui/          # primitivos (Button, Section, Tag, Card, Container, Icons…)
    layout/      # Header, Footer, ThemeToggle, LanguageSwitcher…
    sections/    # blocos da home (Hero, About, Skills, Experience, Projects, Contact)
    project/     # ProjectCard, ProjectsView, ProjectCaseStudy
  context/       # Providers, ThemeContext, LanguageContext
  lib/
    content/     # DADOS: projects.ts, experience.ts, skills.ts, profile.ts
    i18n/        # pt.ts (fonte da verdade), en.ts, es.ts, index.ts
    types.ts     # Locale, Localized<T>, Project, ExperienceItem, SkillCategory
    theme.ts     # design tokens (light/dark) + helper `media`
    registry.tsx # StyledComponentsRegistry (SSR)
    GlobalStyles.ts, styled.d.ts
public/
  Adriano-Souza-CV.pdf     # CV servido no botão de download (versão "design")
  images/shot-*.jpg        # screenshots reais dos projetos
```

Alias de import: **`@/` → `src/`**.

## Padrões (seguir sempre)

### styled-components
- **Um arquivo `styles.ts` por componente**, ao lado do `index.tsx`. O `index.tsx` importa
  os styled dali. Nada de CSS inline espalhado.
- **Props transientes com `$`** (`$variant`, `$size`, `$type`) para não vazarem pro DOM.
- **Nunca use cores/valores crus.** Tudo vem de `props.theme.*` (`theme.colors.*`,
  `theme.space.*`, `theme.radii.*`, `theme.fontSizes.*`…). Se faltar um token, adicione em
  `theme.ts` (mantendo `lightColors` e `darkColors` com as mesmas chaves).
- Media queries pelo helper: `${media.md} { ... }` (de `theme.ts`, mobile-first por `max-width`).
- Config do SWC em `next.config.mjs`: `displayName`/`fileName` só em dev → produção sai com
  classes hash enxutas (`sc-xxxx`). SSR sempre ligado. Não reverter pra `styledComponents: true`.
- Componentes com estado/estilo client usam `"use client"`.

### i18n
- **PT é a fonte da verdade.** `Dictionary = typeof pt`; `en.ts` e `es.ts` precisam ter
  **exatamente a mesma forma** (o TS quebra se divergir). Ao adicionar texto, edite os três.
- Nos componentes: `const { t } = useTranslation()` e use `t.secao.chave`.
- Idioma persiste em `localStorage` (`portfolio-locale`) com fallback pro idioma do browser.

### Conteúdo
- Todo dado editável (projetos, experiência, skills, contato) vive em `src/lib/content/`.
  Texto multilíngue usa `Localized<T>` (`{ pt, en, es }`). Não cravar conteúdo em componente.
- `profile.ts` centraliza nome, e-mail, WhatsApp, GitHub, LinkedIn e `cvUrl`.
- Projetos: ver `Project` em `types.ts`. `featured` → aparece na home; `highlight` →
  tratamento visual especial; `private` → case indica acesso por login. Campos ricos
  opcionais: `modules`, `highlights`, `role`.

### Tom dos textos (importante — ver memória)
- Voz sênior/pleno, "show don't tell": **não** rotular projeto de "full-stack", "back-end
  próprio", "é um sistema grande", nem narrar em 1ª pessoa ("eu atuo/contribuo"). O
  portfólio já evidencia isso. Simples, focado, sem enrolação. Precisão > concisão.
- Posicionamento AWS: full stack **que usa** AWS, **não** especialista em AWS. Não exagerar.

## Contato / e-mail
`src/app/api/contact/route.ts` usa nodemailer (SMTP Outlook/Office365). Credenciais em env:
`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` (ver `.env.example`).

## Segurança / dependências (estado atual)
- Corrigidos: nodemailer (→10), styled-components (→6.5.3, postcss ok), next (→14.2.35).
- **Pendente:** `npm audit` ainda mostra ~5 advisories **do próprio `next`**, que só zeram
  migrando pra **next@16** (major/breaking). Risco real neste deploy é ~0 (Vercel=Linux,
  **não usa `next/image`**, sem `remotePatterns`/rewrites/websocket/CSP-nonce). A migração
  14→16 deve ser feita como tarefa dedicada e testada (APIs async, mudanças de cache), não
  de improviso.

## Observação
`metadataBase` em `layout.tsx` ainda aponta pra `adriano-portfolio.vercel.app`; o domínio
real agora é `adrianorsouza.dev`. Vale alinhar quando for mexer em SEO.
