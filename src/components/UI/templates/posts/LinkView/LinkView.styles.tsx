import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)
  .attrs(p => ({
    margin: `${p.theme.spacing.md} 0`,
    padding: `${p.theme.spacing.lg}`
  }))`
    background: white;
    border-radius: 10px;
  `;

export const StyledBox = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.sm} 0` }))``;