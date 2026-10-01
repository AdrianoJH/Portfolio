"use client";

import type { ReactNode } from "react";
import { StyledCard } from "./styles";

export function Card({
  children,
  interactive,
  className,
}: {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
}) {
  return (
    <StyledCard $interactive={interactive} className={className}>
      {children}
    </StyledCard>
  );
}
