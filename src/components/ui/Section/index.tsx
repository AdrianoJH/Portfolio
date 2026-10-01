"use client";

import type { ReactNode } from "react";
import { Container } from "../Container";
import { StyledSection } from "./styles";

interface SectionProps {
  id?: string;
  /** Fundo alternado (cinza/escuro) para intercalar as seções. */
  alt?: boolean;
  /** Remove o Container interno (para seções full-bleed). */
  fluid?: boolean;
  children: ReactNode;
}

export function Section({ id, alt, fluid, children }: SectionProps) {
  return (
    <StyledSection id={id} $alt={alt}>
      {fluid ? children : <Container>{children}</Container>}
    </StyledSection>
  );
}
