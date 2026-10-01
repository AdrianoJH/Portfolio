import styled from "styled-components";

export const StyledIconButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentSoft : theme.colors.surface};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.text)};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
