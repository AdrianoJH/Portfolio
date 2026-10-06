"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { projects } from "@/lib/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Wrapper, Back, Grid } from "./styles";

export function ProjectsView() {
  const { t } = useTranslation();
  const flagship = projects.find((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <Wrapper>
      <Container>
        <Back>
          <Button as={Link} href="/" variant="ghost" size="md">
            <ArrowRightIcon style={{ transform: "rotate(180deg)" }} />
            {t.projectsPage.backHome}
          </Button>
        </Back>
        <SectionTitle
          eyebrow={t.nav.projects}
          title={t.projectsPage.title}
          subtitle={t.projectsPage.subtitle}
        />
        <Grid>
          {flagship && <ProjectCard project={flagship} featured />}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
