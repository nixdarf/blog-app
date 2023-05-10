import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";


export const StyledNavbarWrapper = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.md} auto` }))`
    max-width: 1248px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  `;

export const StyledBarsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledNavMenuWrapper = styled(Box)
  .attrs(p => ({ margin: `0 ${p.theme.spacing.lg}`}))``;