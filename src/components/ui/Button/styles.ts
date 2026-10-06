import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "md" | "lg";

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    box-shadow: 0 6px 18px ${({ theme }) => theme.colors.shadow};
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.heading};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.accentSoft};
    }
  `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  white-space: nowrap;
  transition: all ${({ theme }) => theme.transitions.base};

  padding: ${({ $size }) => ($size === "lg" ? "0.85rem 1.7rem" : "0.6rem 1.25rem")};
  font-size: ${({ $size, theme }) => ($size === "lg" ? theme.fontSizes.md : theme.fontSizes.sm)};

  svg {
    width: 1.15em;
    height: 1.15em;
    flex-shrink: 0;
  }

  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
