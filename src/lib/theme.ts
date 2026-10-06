// ─────────────────────────────────────────────────────────────
// Design tokens. Tudo que muda entre dark/light vive em `colors`;
// o resto (espaçamento, tipografia, raios, sombras) é compartilhado.
// Os componentes NUNCA usam cores cruas — só `props.theme.colors.*`.
// ─────────────────────────────────────────────────────────────

const shared = {
  fonts: {
    body: `var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    heading: `var(--font-space-grotesk), var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
    mono: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`,
  },
  fontSizes: {
    xs: "0.78rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.75rem",
    "3xl": "2.25rem",
    "4xl": "3rem",
    "5xl": "3.75rem",
  },
  fontWeights: { regular: 400, medium: 500, semibold: 600, bold: 700, extra: 800 },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.5rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },
  radii: { sm: "6px", md: "10px", lg: "16px", xl: "24px", pill: "999px" },
  breakpoints: { sm: "480px", md: "768px", lg: "1024px", xl: "1200px" },
  container: "1120px",
  transitions: {
    base: "200ms ease",
    slow: "400ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
  zIndices: { header: 100, overlay: 200, toast: 300 },
} as const;

const lightColors = {
  bg: "#ffffff",
  bgAlt: "#f4f6fb",
  surface: "#ffffff",
  surfaceAlt: "#f8fafc",
  border: "#e5e7eb",
  text: "#374151",
  textMuted: "#64748b",
  heading: "#0f172a",
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  primaryContrast: "#ffffff",
  accentSoft: "#eef2ff",
  shadow: "rgba(15, 23, 42, 0.08)",
  shadowStrong: "rgba(15, 23, 42, 0.16)",
};

const darkColors: typeof lightColors = {
  bg: "#0b0f17",
  bgAlt: "#0e131d",
  surface: "#161c27",
  surfaceAlt: "#1b2230",
  border: "#232b38",
  text: "#cbd5e1",
  textMuted: "#8b98ac",
  heading: "#f8fafc",
  primary: "#3b82f6",
  primaryHover: "#60a5fa",
  primaryContrast: "#0b0f17",
  accentSoft: "#17233b",
  shadow: "rgba(0, 0, 0, 0.4)",
  shadowStrong: "rgba(0, 0, 0, 0.6)",
};

export type ThemeMode = "light" | "dark";

export const lightTheme = { mode: "light" as ThemeMode, colors: lightColors, ...shared };
export const darkTheme = { mode: "dark" as ThemeMode, colors: darkColors, ...shared };

export type AppTheme = typeof lightTheme;

export const themes: Record<ThemeMode, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

// Helper para media queries: ${media.md} { ... }
export const media = {
  sm: `@media (max-width: ${shared.breakpoints.sm})`,
  md: `@media (max-width: ${shared.breakpoints.md})`,
  lg: `@media (max-width: ${shared.breakpoints.lg})`,
  xl: `@media (max-width: ${shared.breakpoints.xl})`,
};
