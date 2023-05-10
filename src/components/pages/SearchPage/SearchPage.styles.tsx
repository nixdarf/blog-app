import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)
  .attrs(p => ({
    margin: `${p.theme.spacing.md} auto`,
    padding: `${p.theme.spacing.lg}`
  }))`
    background: white;
    border-radius: 10px;
  `;
  