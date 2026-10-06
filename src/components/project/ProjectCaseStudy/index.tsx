"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GithubIcon,
  DownloadIcon,
} from "@/components/ui/Icons";
import {
  Wrapper,
  Back,
  Head,
  Cover,
  Layout,
  Content,
  Aside,
  Block,
  TagList,
  Actions,
  HighlightList,
} from "./styles";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { t, locale } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Back>
          <Button as={Link} href="/projetos" variant="ghost" size="md">
            <ArrowRightIcon style={{ transform: "rotate(180deg)" }} />
            {t.caseStudy.back}
          </Button>
        </Back>

        <Head>
          <h1>{project.title}</h1>
          <p>{project.summary[locale]}</p>
        </Head>

        <Cover>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} />
        </Cover>

        <Layout>
          <Content>
            <h2>{t.caseStudy.overview}</h2>
            {project.description[locale].map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {project.modules && (
              <>
                <h2>{t.caseStudy.modules}</h2>
                <HighlightList>
                  {project.modules[locale].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </HighlightList>
              </>
            )}

            {project.highlights && (
              <>
                <h2>{t.caseStudy.highlights}</h2>
                <HighlightList>
                  {project.highlights[locale].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </HighlightList>
              </>
            )}
          </Content>

          <Aside>
            <Block>
              <strong>{t.caseStudy.year}</strong>
              <span>{project.year}</span>
            </Block>

            {project.role && (
              <Block>
                <strong>{t.caseStudy.myRole}</strong>
                <span>{project.role[locale]}</span>
              </Block>
            )}

            <Block>
              <strong>{t.caseStudy.stack}</strong>
              <TagList>
                {project.tech.map((tech) => (
                  <Tag key={tech} accent>
                    {tech}
                  </Tag>
                ))}
              </TagList>
            </Block>

            <Actions>
              {project.links.demo && (
                <Button
                  as="a"
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                >
                  <ExternalLinkIcon />
                  {t.caseStudy.visit}
                </Button>
              )}
              {project.links.appStore && (
                <Button
                  as="a"
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <DownloadIcon />
                  {t.caseStudy.appStore}
                </Button>
              )}
              {project.links.playStore && (
                <Button
                  as="a"
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <DownloadIcon />
                  {t.caseStudy.playStore}
                </Button>
              )}
              {project.links.repo && (
                <Button
                  as="a"
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <GithubIcon />
                  {t.caseStudy.code}
                </Button>
              )}
            </Actions>
          </Aside>
        </Layout>
      </Container>
    </Wrapper>
  );
}
