"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { StyledIconButton } from "./styles";

type IconButtonProps = {
  /** Obrigatório para acessibilidade (aria-label). */
  label: string;
  active?: boolean;
  as?: ElementType;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "ref"> & {
    href?: string;
    target?: string;
    rel?: string;
  };

export function IconButton({ label, active, as, children, ...rest }: IconButtonProps) {
  return (
    <StyledIconButton as={as} $active={active} aria-label={label} title={label} {...rest}>
      {children}
    </StyledIconButton>
  );
}
