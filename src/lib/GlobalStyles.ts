"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  * { margin: 0; padding: 0; }

  html { scroll-behavior: smooth; scroll-padding-top: 90px; }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background ${({ theme }) => theme.transitions.base},
      color ${({ theme }) => theme.transitions.base};
  }

  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.heading};
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  a { color: inherit; text-decoration: none; }

  img, svg { display: block; max-width: 100%; }

  button { font-family: inherit; cursor: pointer; border: none; background: none; }

  ul { list-style: none; }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgAlt}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  }
`;
