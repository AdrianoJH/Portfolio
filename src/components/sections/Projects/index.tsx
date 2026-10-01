"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { featuredProjects } from "@/lib/content/projects";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Grid, MoreRow } from "./styles";

export function Projects() {
  const { t } = useTranslation();

  return (
    <Section id="projetos" alt>
      <SectionTitle
        eyebrow={t.projects.featured}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />
      <Grid>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
      <MoreRow>
        <Button as={Link} href="/projetos" variant="outline" size="lg">
          {t.projects.viewAll}
          <ArrowRightIcon />
        </Button>
      </MoreRow>
    </Section>
  );
}
