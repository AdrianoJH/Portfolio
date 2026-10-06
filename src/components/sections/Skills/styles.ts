import styled from "styled-components";
import { media } from "@/lib/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${({ theme }) => theme.space["3xl"]};
  row-gap: ${({ theme }) => theme.space["2xl"]};

  ${media.md} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

export const GroupTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.heading};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    flex: 0 0 auto;
  }
`;

export const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

export const Pill = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.45rem 0.95rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color ${({ theme }) => theme.transitions.base},
    color ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
