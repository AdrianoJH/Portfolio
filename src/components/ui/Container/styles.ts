import styled from "styled-components";
import { media } from "@/lib/theme";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space.lg};

  ${media.md} {
    padding-inline: ${({ theme }) => theme.space.md};
  }
`;
