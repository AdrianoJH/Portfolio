import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% { transform: scaleX(0); opacity: 1; }
  80% { transform: scaleX(0.9); opacity: 1; }
  100% { transform: scaleX(1); opacity: 0; }
`;

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: ${({ theme }) => theme.zIndices.toast};
  transform-origin: left;
  transform: scaleX(0);
  opacity: 0;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryHover}
  );

  &[data-active="true"] {
    animation: ${load} 0.7s ease forwards;
  }
`;
