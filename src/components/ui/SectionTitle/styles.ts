import styled from "styled-components";

export const Wrapper = styled.div<{ $align: "left" | "center" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};
  text-align: ${({ $align }) => $align};
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: ${({ $align }) => ($align === "center" ? "640px" : "none")};
  margin-inline: ${({ $align }) => ($align === "center" ? "auto" : "0")};
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: "";
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.extra};
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
