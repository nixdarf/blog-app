import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledContainer = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.lg} 0` }))`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

export const StyledBox = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.lg} 0` }))``;
