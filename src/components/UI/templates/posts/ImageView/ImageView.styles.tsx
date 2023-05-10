import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)
  .attrs(p => ({
    margin: `${p.theme.spacing.md} 0`,
    padding: `${p.theme.spacing.lg}`
  }))`
    background: white;
    border-radius: 10px;
    min-height: 200px;
  `;

export const StyledImage = styled.img`
  float: left;
  margin-right: ${p => p.theme.spacing.md};
  margin-bottom: ${p => p.theme.spacing.md};
  max-width: 150px;
  height: 150px;
  object-fit: cover;
`;
