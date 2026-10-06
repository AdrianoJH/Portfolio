import styled from "styled-components";

export const StyledCard = styled.div<{ $interactive?: boolean }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  ${({ $interactive, theme }) =>
    $interactive &&
    `
    &:hover {
      transform: translateY(-6px);
      border-color: ${theme.colors.primary};
      box-shadow: 0 18px 40px ${theme.colors.shadow};
    }
  `}
`;
