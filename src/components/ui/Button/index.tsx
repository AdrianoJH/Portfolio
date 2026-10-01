"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { StyledButton, type ButtonVariant, type ButtonSize } from "./styles";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renderiza como outro elemento (ex.: "a" para links). */
  as?: ElementType;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "ref"> & {
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean | string;
  };

export function Button({ variant = "primary", size = "md", as, children, ...rest }: ButtonProps) {
  return (
    <StyledButton as={as} $variant={variant} $size={size} {...rest}>
      {children}
    </StyledButton>
  );
}
