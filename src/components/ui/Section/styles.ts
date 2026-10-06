import styled from "styled-components";
import { media } from "@/lib/theme";

export const StyledSection = styled.section<{ $alt?: boolean }>`
  padding-block: clamp(4.5rem, 9vw, 8.5rem);
  background: ${({ $alt, theme }) => ($alt ? theme.colors.bgAlt : theme.colors.bg)};
  transition: background ${({ theme }) => theme.transitions.base};

  ${media.md} {
    padding-block: clamp(3.5rem, 8vw, 5rem);
  }
`;
