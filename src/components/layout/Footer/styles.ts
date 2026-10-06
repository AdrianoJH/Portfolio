import styled from "styled-components";
import { media } from "@/lib/theme";

export const FooterBar = styled.footer`
  background: ${({ theme }) => theme.colors.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin-inline: auto;
  padding: ${({ theme }) => theme.space["2xl"]} ${({ theme }) => theme.space.lg}
    ${({ theme }) => theme.space.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: ${({ theme }) => theme.space.xl};

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  max-width: 320px;

  strong {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.heading};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.base};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding-top: ${({ theme }) => theme.space.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.xs};
  }
`;
