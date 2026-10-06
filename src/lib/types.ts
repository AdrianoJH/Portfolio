export type Locale = "pt" | "en" | "es";

export const LOCALES: Locale[] = ["pt", "en", "es"];

// Texto que varia por idioma. Ex.: { pt: "Olá", en: "Hi", es: "Hola" }
export type Localized<T = string> = Record<Locale, T>;

export interface ProjectLink {
  demo?: string;
  repo?: string;
  /** Link da App Store (projetos mobile). */
  appStore?: string;
  /** Link da Google Play (projetos mobile). */
  playStore?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  /** Destaque (ex.: case ChronoMAX) recebe tratamento visual especial. */
  highlight?: boolean;
  /** Aparece na home (seção "Projetos em destaque"). */
  featured?: boolean;
  /** Plataforma privada: o acesso requer login (exibe aviso no case). */
  private?: boolean;
  image: string;
  tech: string[];
  links: ProjectLink;
  /** Uma linha, para o card. */
  summary: Localized;
  /** Parágrafos do case study. */
  description: Localized<string[]>;
  /** Principais módulos/funcionalidades, opcional (para sistemas grandes). */
  modules?: Localized<string[]>;
  /** Destaques técnicos em tópicos, opcional. */
  highlights?: Localized<string[]>;
  /** Papel/contexto, opcional. */
  role?: Localized;
}

export interface ExperienceItem {
  company: string;
  start: string;
  /** Ausente quando é o cargo atual (renderiza "Atual/Present/Actual"). */
  end?: string;
  role: Localized;
  description: Localized;
}

export interface SkillCategory {
  /** Chave para buscar o rótulo traduzido no i18n. */
  key: "frontend" | "backend" | "cloud" | "mobile" | "data" | "practices";
  items: string[];
}
