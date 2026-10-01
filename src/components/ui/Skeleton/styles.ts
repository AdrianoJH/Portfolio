import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

export const Block = styled.div<{ $w?: string; $h?: string; $r?: string }>`
  width: ${({ $w }) => $w ?? "100%"};
  height: ${({ $h }) => $h ?? "16px"};
  border-radius: ${({ $r, theme }) => $r ?? theme.radii.sm};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surfaceAlt} 25%,
    ${({ theme }) => theme.colors.border} 37%,
    ${({ theme }) => theme.colors.surfaceAlt} 63%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;
