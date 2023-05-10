import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const SearchBarWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledContainer = styled(Box)
  .attrs(p => ({ margin: `0 ${p.theme.spacing.xs}` }))``;