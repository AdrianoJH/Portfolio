"use client";

import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyles } from "@/lib/GlobalStyles";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import { NavigationProgress } from "@/components/layout/NavigationProgress";

// Único ponto de composição dos provedores globais.
// Ordem: registry (SSR do styled) → tema → idioma → estilos globais.
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <LanguageProvider>
          <GlobalStyles />
          <NavigationProgress />
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
