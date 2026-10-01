"use client";

import type { ReactNode } from "react";
import { StyledContainer } from "./styles";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}
