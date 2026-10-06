import styled from "styled-components";
import Link from "next/link";
import { media } from "@/lib/theme";

export const Tile = styled.div<{ $featured?: boolean }>`
  position: relative;
  isolation: isolate;
  grid-column: ${({ $featured }) => ($featured ? "1 / -1" : "auto")};
  aspect-ratio: ${({ $featured }) => ($featured ? "16 / 7" : "4 / 3")};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  box-shadow: 0 12px 30px ${({ theme }) => theme.colors.shadow};
  transition: transform ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 26px 55px ${({ theme }) => theme.colors.shadowStrong};
  }

  &:hover img {
    transform: scale(1.05);
  }

  ${media.md} {
    aspect-ratio: ${({ $featured }) => ($featured ? "16 / 9" : "4 / 3")};
  }
`;

export const Shot = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }
`;

export const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(5, 8, 15, 0.94) 0%,
    rgba(5, 8, 15, 0.7) 26%,
    rgba(5, 8, 15, 0.15) 55%,
    rgba(5, 8, 15, 0) 72%
  );
`;

export const CaseLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 3;
`;

export const Visit = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.space.md};
  right: ${({ theme }) => theme.space.md};
  z-index: 4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  transition: background ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};

  svg {
    width: 19px;
    height: 19px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: scale(1.08);
  }
`;

export const Info = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.xl};

  ${media.md} {
    padding: ${({ theme }) => theme.space.lg};
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};

  span {
    flex: 0 0 auto;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.35rem, 2.4vw, 2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

export const Summary = styled.p`
  color: rgba(255, 255, 255, 0.82);
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.55;
  max-width: 58ch;
`;

export const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.xs};
  margin-top: ${({ theme }) => theme.space.xs};

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: #fff;
    padding: 0.2rem 0.6rem;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
`;

export const More = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: #fff;
  opacity: 0.9;

  svg {
    width: 16px;
    height: 16px;
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  ${Tile}:hover & svg {
    transform: translateX(4px);
  }
`;
