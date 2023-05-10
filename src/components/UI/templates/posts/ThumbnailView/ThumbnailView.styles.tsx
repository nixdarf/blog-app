import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)
  .attrs(p => ({
    margin: `${p.theme.spacing.md} 0`,
    padding: `${p.theme.spacing.lg}`
  }))`
    display: flex;
    overflow: scroll;
    background: white;
    border-radius: 10px;

    img {
      max-width: 150px;
      height: 150px;
      object-fit: cover;
      cursor: pointer;
    }
  `;