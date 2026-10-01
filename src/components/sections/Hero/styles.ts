import styled, { keyframes } from "styled-components";
import { media } from "@/lib/theme";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.5); }
  70% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-block: ${({ theme }) => theme.space["3xl"]};

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 50%;
    height: 70%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.primary}22,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space.lg};
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.space["2xl"]};

  ${media.lg} {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
  ${media.md} {
    padding-inline: ${({ theme }) => theme.space.md};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  max-width: 620px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.4rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  ${media.lg} {
    align-self: center;
  }

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 2s infinite;
  }
`;

export const Greeting = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.extra};
  letter-spacing: -0.03em;
  line-height: 1.05;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

export const Role = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textMuted};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.sm};

  ${media.lg} {
    justify-content: center;
  }
`;

export const PortraitWrap = styled.div`
  position: relative;
  justify-self: end;
  animation: ${float} 6s ease-in-out infinite;

  ${media.lg} {
    justify-self: center;
    order: -1;
  }
`;

export const Portrait = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 30px 60px ${({ theme }) => theme.colors.shadowStrong};

  ${media.md} {
    width: 240px;
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Scroll = styled.a`
  position: absolute;
  bottom: ${({ theme }) => theme.space.lg};
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  svg {
    width: 18px;
    height: 18px;
    animation: ${float} 2s ease-in-out infinite;
  }

  ${media.lg} {
    display: none;
  }
`;
