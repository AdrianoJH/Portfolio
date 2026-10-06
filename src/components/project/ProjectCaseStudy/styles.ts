import styled from "styled-components";
import { media } from "@/lib/theme";

export const Wrapper = styled.main`
  padding-top: calc(${({ theme }) => theme.space["3xl"]} + 40px);
  padding-bottom: ${({ theme }) => theme.space["3xl"]};
  min-height: 100vh;
`;

export const Back = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const Head = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    letter-spacing: -0.02em;

    ${media.md} {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    max-width: 680px;
  }
`;

export const Cover = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.space.xl};
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  box-shadow: 0 24px 60px ${({ theme }) => theme.colors.shadow};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  ${media.md} {
    aspect-ratio: 16 / 11;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: ${({ theme }) => theme.space["2xl"]};
  align-items: start;

  ${media.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.75;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  position: sticky;
  top: 100px;

  ${media.lg} {
    position: static;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};

  strong {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  span {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.xs};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.sm};
`;

export const PrivateNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-top: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HighlightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.space.lg};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.7;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 7px;
      height: 7px;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
