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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.lg};

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;
