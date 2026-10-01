# Portfólio — Adriano Rodrigues de Souza

Portfólio pessoal construído em **Next.js (App Router) + TypeScript + styled-components**, com
tema claro/escuro, i18n (PT/EN/ES) e arquitetura componentizada.

## Stack

- **Next.js 14** (App Router, Server Components, rotas dinâmicas)
- **TypeScript**
- **styled-components** (um arquivo de estilo por componente)
- **nodemailer** (envio do formulário de contato via API Route)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Variáveis de ambiente

O formulário de contato (`/api/contact`) envia e-mail por SMTP. Crie um `.env.local`
baseado no `.env.example`:

```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=seu-email@outlook.com
SMTP_PASS=sua-senha-ou-app-password
CONTACT_TO=adrianorsouza.h6@gmail.com
```

Na Vercel, configure as mesmas variáveis em *Project Settings → Environment Variables*.

## Estrutura

```
src/
  app/            Rotas (home, /projetos, /projetos/[slug], api/contact)
  components/
    ui/           Primitivos reutilizáveis (Button, Card, Tag, Section...)
    layout/       Header, Footer, ThemeToggle, LanguageSwitcher
    sections/     Blocos da home (Hero, About, Skills, Experience, Projects, Contact)
    project/      ProjectCard, ProjectsView, ProjectCaseStudy
  context/        Providers, tema (dark/light) e idioma (PT/EN/ES)
  lib/
    theme.ts      Design tokens
    i18n/         Dicionários pt/en/es
    content/      Dados (projetos, skills, experiência, perfil)
```

Cada componente tem seu próprio `index.tsx` + `styles.ts`.
