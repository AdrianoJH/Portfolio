import styled from "styled-components";
import { media } from "@/lib/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: ${({ theme }) => theme.space["2xl"]};
  align-items: center;

  ${media.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

export const Portrait = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  aspect-ratio: 4 / 5;
  max-width: 380px;

  ${media.lg} {
    max-width: 320px;
    margin-inline: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.75;
  }
`;

export const InfoGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  align-items: flex-start;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
    margin-top: 2px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  span {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
