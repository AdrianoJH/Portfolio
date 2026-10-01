import styled from "styled-components";
import { media } from "@/lib/theme";

export const StyledSection = styled.section<{ $alt?: boolean }>`
  padding-block: ${({ theme }) => theme.space["3xl"]};
  background: ${({ $alt, theme }) => ($alt ? theme.colors.bgAlt : theme.colors.bg)};
  transition: background ${({ theme }) => theme.transitions.base};

  ${media.md} {
    padding-block: ${({ theme }) => theme.space["2xl"]};
  }
`;
