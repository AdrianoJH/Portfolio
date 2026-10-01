import styled from "styled-components";
import { media } from "@/lib/theme";

export const FooterBar = styled.footer`
  background: ${({ theme }) => theme.colors.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin-inline: auto;
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};

  ${media.md} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};

  strong {
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`;
