import type { Project } from "./types";

/** Rótulo da barra de endereço da "moldura de navegador" — sempre convidativo. */
export function frameLabel(project: Project): string {
  if (project.links.demo) {
    try {
      return new URL(project.links.demo).host.replace(/^www\./, "");
    } catch {
      return "";
    }
  }
  if (project.links.playStore || project.links.appStore) {
    return "App Store · Google Play";
  }
  return "";
}

/** Primeiro link visitável disponível (site, loja). */
export function primaryLink(project: Project): string | undefined {
  return project.links.demo || project.links.playStore || project.links.appStore;
}
