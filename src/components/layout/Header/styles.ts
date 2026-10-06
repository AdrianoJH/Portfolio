import styled from "styled-components";
import Link from "next/link";
import { media } from "@/lib/theme";

export const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndices.header};
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.bg : "transparent"};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "saturate(180%) blur(8px)" : "none")};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin-inline: auto;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};

  ${media.md} {
    padding-inline: ${({ theme }) => theme.space.md};
  }
`;

export const Logo = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights.extra};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};

  ${media.lg} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.base};

  i {
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.72rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`;

export const MobileToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  svg {
    width: 20px;
    height: 20px;
  }

  ${media.lg} {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div<{ $open: boolean }>`
  display: none;

  ${media.lg} {
    display: ${({ $open }) => ($open ? "block" : "none")};
    background: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md}
    ${({ theme }) => theme.space.lg};

  a {
    display: block;
    padding: ${({ theme }) => theme.space.md} 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;
