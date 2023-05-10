import styled from 'styled-components';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled(Typography).attrs({ variant: 'label' })`
  margin-bottom: ${p => p.theme.spacing.sm};
  width: 100%;
`;

export const StyledInputField = styled.input`
  padding: ${p => p.theme.spacing.sm};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  font-size: 1em;
  outline: none;

  &:focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;