import type { Metadata } from "next";
import { ProjectsView } from "@/components/project/ProjectsView";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos profissionais e pessoais de Adriano Souza.",
};

export default function ProjetosPage() {
  return <ProjectsView />;
}
