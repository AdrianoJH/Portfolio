import type { Locale } from "../types";
import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

// O formato do PT é a fonte da verdade; EN e ES precisam bater com ele.
export type Dictionary = typeof pt;

export const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export const localeNames: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};
