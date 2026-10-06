import styled, { keyframes } from "styled-components";
import { media } from "@/lib/theme";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.5); }
  70% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
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
      ${({ theme }) => theme.colors.primary}1f,
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
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.space["2xl"]};

  ${media.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space["2xl"]};
  }
  ${media.md} {
    padding-inline: ${({ theme }) => theme.space.md};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  max-width: 640px;
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
  margin-bottom: ${({ theme }) => theme.space.sm};

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 2s infinite;
  }
`;

export const Name = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Line = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 48ch;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

export const PortraitWrap = styled.div`
  position: relative;
  justify-self: end;
  animation: ${float} 6s ease-in-out infinite;

  ${media.lg} {
    justify-self: start;
    order: -1;
  }
`;

export const Portrait = styled.div`
  position: relative;
  width: 320px;
  height: 380px;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 30px 60px ${({ theme }) => theme.colors.shadowStrong};

  ${media.md} {
    width: 260px;
    height: 320px;
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
