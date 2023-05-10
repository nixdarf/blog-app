import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledPostWrapper = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.md} 0` }))`
    background: white;
    border-radius: 10px;
    
    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  `;

export const StyledContent = styled(Box)
  .attrs(p => ({ padding: p.theme.spacing.lg }))``;

export const StyledBox = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.lg} 0` }))``;
