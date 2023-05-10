import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledBox = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.lg} 0` }))``;