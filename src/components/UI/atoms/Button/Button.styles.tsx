import styled from "styled-components";

export const StyledButton = styled.button<{ rounded?: boolean; variant: 'primary' | 'secondary' }>`
  background-color: ${p => p.theme.colors[p.variant]};
  border: none;
  padding: ${p => p.theme.spacing.sm} ${p => p.theme.spacing.lg};
  color: #ffffff;
  border-radius: ${p => p.rounded ? '30px' : '5px'};
`;