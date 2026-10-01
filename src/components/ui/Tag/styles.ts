import styled from "styled-components";

export const StyledTag = styled.span<{ $accent?: boolean }>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid
    ${({ $accent, theme }) => ($accent ? theme.colors.primary : theme.colors.border)};
  color: ${({ $accent, theme }) => ($accent ? theme.colors.primary : theme.colors.text)};
  background: ${({ $accent, theme }) =>
    $accent ? theme.colors.accentSoft : theme.colors.surfaceAlt};
  transition: all ${({ theme }) => theme.transitions.base};
`;
