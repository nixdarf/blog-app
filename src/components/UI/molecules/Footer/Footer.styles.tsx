import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)`
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing.lg}
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.xs}` }))`
    img {
      height: 30px;
    }
  `;
