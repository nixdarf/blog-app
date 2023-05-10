import styled from 'styled-components';

export const StyledLinkButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.primary};
  text-decoration: underline;
  
  &:hover {
    color: #000;
  }
`;