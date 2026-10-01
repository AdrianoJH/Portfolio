"use client";

import type { ReactNode } from "react";
import { StyledTag } from "./styles";

export function Tag({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return <StyledTag $accent={accent}>{children}</StyledTag>;
}
