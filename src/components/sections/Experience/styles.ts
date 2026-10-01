import styled from "styled-components";
import { media } from "@/lib/theme";

export const Timeline = styled.ol`
  position: relative;
  max-width: 820px;
  margin-inline: auto;
  padding-left: ${({ theme }) => theme.space.xl};

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }

  ${media.sm} {
    padding-left: ${({ theme }) => theme.space.lg};
  }
`;

export const Item = styled.li`
  position: relative;
  padding-bottom: ${({ theme }) => theme.space.xl};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: calc(-${({ theme }) => theme.space.xl} + 1px);
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bg};
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }

  ${media.sm} {
    &::before {
      left: calc(-${({ theme }) => theme.space.lg} + 1px);
    }
  }
`;

export const Period = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.accentSoft};
  padding: 0.25rem 0.65rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

export const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.space.xs};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
`;
