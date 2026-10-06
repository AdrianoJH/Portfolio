import styled from "styled-components";
import { media } from "@/lib/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  margin-top: ${({ theme }) => theme.space.xl};

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const MoreRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.xl};
`;
