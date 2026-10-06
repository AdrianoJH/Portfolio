import styled from "styled-components";
import { media } from "@/lib/theme";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.article`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  ${media.md} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.sm};
    padding: ${({ theme }) => theme.space.lg} 0;
  }
`;

export const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 6px;
  white-space: nowrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`;

export const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  letter-spacing: -0.02em;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
  margin-top: ${({ theme }) => theme.space.sm};
  max-width: 62ch;
`;
