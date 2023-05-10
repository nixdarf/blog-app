import styled from "styled-components";
import { Typography } from "../Typography/Typography";

export const StyledLabel = styled(Typography).attrs({ variant: 'label' })`
  margin-bottom: ${p => p.theme.spacing.sm};
`;

export const StyledTextareaField = styled.textarea`
  width: 100%;
  padding: ${p => p.theme.spacing.sm};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  font-size: 1em;
  outline: none;

  &:focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;