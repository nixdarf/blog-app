import { Box } from "@UI/atoms/Box/Box";
import styled from "styled-components";

export const StyledWrapper = styled(Box)`
  position: relative;
  line-height: 14px;

  img {
    border-radius: 10px;
  }
`;

export const StyledContent = styled(Box)`
  max-width: 30%;
  position: absolute;
  right: ${p => p.theme.spacing.md};
  bottom: ${p => p.theme.spacing.md};
  background: ${p => p.theme.colors.lightGrey};
  padding: ${p => p.theme.spacing.md};
  opacity: .88;
`;