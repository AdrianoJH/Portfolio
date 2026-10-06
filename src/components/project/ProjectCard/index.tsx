"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/lib/types";
import { primaryLink } from "@/lib/projectUrl";
import { ExternalLinkIcon, ArrowRightIcon } from "@/components/ui/Icons";
import {
  Tile,
  Shot,
  Scrim,
  Visit,
  CaseLink,
  Info,
  Meta,
  Title,
  Summary,
  Tech,
  More,
} from "./styles";

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const { t, locale } = useTranslation();
  const link = primaryLink(project);

  return (
    <Tile $featured={featured}>
      <Shot>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" />
      </Shot>
      <Scrim />

      <CaseLink href={`/projetos/${project.slug}`} aria-label={project.title} />

      {link && (
        <Visit
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.visit}
        >
          <ExternalLinkIcon />
        </Visit>
      )}

      <Info>
        <Meta>
          <Title>{project.title}</Title>
          <span>{project.year}</span>
        </Meta>
        {featured && <Summary>{project.summary[locale]}</Summary>}
        <Tech>
          {project.tech.slice(0, featured ? 6 : 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Tech>
        <More>
          {t.projects.caseStudy}
          <ArrowRightIcon />
        </More>
      </Info>
    </Tile>
  );
}
