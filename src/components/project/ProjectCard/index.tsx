"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "@/components/ui/Icons";
import { Thumb, Badge, Body, TopRow, Summary, TechRow, Footer, Links } from "./styles";

export function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useTranslation();

  return (
    <Card interactive>
      <Thumb>
        {project.highlight && <Badge>★ {t.projects.featured}</Badge>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} loading="lazy" />
      </Thumb>
      <Body>
        <TopRow>
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </TopRow>
        <Summary>{project.summary[locale]}</Summary>
        <TechRow>
          {project.tech.slice(0, 5).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </TechRow>
        <Footer>
          <Button as={Link} href={`/projetos/${project.slug}`} variant="ghost" size="md">
            {t.projects.caseStudy}
            <ArrowRightIcon />
          </Button>
          <Links>
            {project.links.demo && (
              <IconButton
                as="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                label={t.projects.visit}
              >
                <ExternalLinkIcon />
              </IconButton>
            )}
            {project.links.repo && (
              <IconButton
                as="a"
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                label={t.projects.code}
              >
                <GithubIcon />
              </IconButton>
            )}
          </Links>
        </Footer>
      </Body>
    </Card>
  );
}
