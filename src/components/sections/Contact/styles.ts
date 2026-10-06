import styled from "styled-components";
import { media } from "@/lib/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: ${({ theme }) => theme.space["2xl"]};
  align-items: start;

  ${media.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

export const Channels = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: background ${({ theme }) => theme.transitions.base};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }

  &:hover .icon {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
  }

  .icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.accentSoft};
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
    transition: background ${({ theme }) => theme.transitions.base},
      color ${({ theme }) => theme.transitions.base};

    svg {
      width: 24px;
      height: 24px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  span {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const fieldStyles = `
  width: 100%;
  font: inherit;
  font-size: 1rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  padding: 0.65rem 0;
  border: none;
  border-bottom: 1px solid;
  background: transparent;
`;

export const Input = styled.input`
  ${fieldStyles}
  border-bottom-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.heading};
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Textarea = styled.textarea`
  ${fieldStyles}
  min-height: 130px;
  resize: vertical;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.heading};
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Status = styled.p<{ $type: "success" | "error" }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $type }) => ($type === "success" ? "#16a34a" : "#dc2626")};
`;
