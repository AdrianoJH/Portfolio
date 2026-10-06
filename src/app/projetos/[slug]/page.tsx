import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/content/projects";
import { ProjectCaseStudy } from "@/components/project/ProjectCaseStudy";
import { JsonLd } from "@/components/seo/JsonLd";
import { projectJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const path = `/projetos/${project.slug}`;
  return {
    title: project.title,
    description: project.summary.pt,
    alternates: { canonical: path },
    openGraph: {
      title: project.title,
      description: project.summary.pt,
      url: path,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd data={[projectJsonLd(project), breadcrumbJsonLd(project)]} />
      <ProjectCaseStudy project={project} />
    </>
  );
}
