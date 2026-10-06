// Constantes do site e construtores de dados estruturados (JSON-LD / Schema.org).
import { profile } from "./content/profile";
import type { Project } from "./types";

export const SITE_URL = "https://adrianorsouza.dev";
export const SITE_NAME = "Adriano Souza — Desenvolvedor Full Stack";
export const SITE_DESCRIPTION =
  "Desenvolvedor Full Stack com mais de 3 anos de experiência em web, mobile e serviços na nuvem — React, Next.js, Node.js, TypeScript, Flutter e AWS.";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    url: SITE_URL,
    jobTitle: "Desenvolvedor Full Stack",
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Flutter",
      "Python",
      "AWS",
      "styled-components",
      "PostgreSQL",
      "DynamoDB",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: profile.name },
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary.pt,
    url: `${SITE_URL}/projetos/${project.slug}`,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: profile.name },
    keywords: project.tech.join(", "),
    ...(project.image ? { image: `${SITE_URL}${project.image}` } : {}),
  };
}

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projetos", item: `${SITE_URL}/projetos` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projetos/${project.slug}`,
      },
    ],
  };
}
