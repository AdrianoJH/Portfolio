import type { Metadata } from "next";
import { ProjectsView } from "@/components/project/ProjectsView";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Seleção de projetos de Adriano Souza — plataformas web, apps mobile e sites, com React, Next.js, Node.js, Flutter e AWS.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos | Adriano Souza",
    description:
      "Seleção de projetos de Adriano Souza — plataformas web, apps mobile e sites.",
    url: "/projetos",
    type: "website",
  },
};

export default function ProjetosPage() {
  return <ProjectsView />;
}
