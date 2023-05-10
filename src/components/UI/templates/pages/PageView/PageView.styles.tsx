import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)
  .attrs(() => ({ margin: '0 auto' }))``;

export const StyledContainer = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.lg} auto` }))`
    max-width: 1248px;
    width: calc(100% - 80px);
  `;