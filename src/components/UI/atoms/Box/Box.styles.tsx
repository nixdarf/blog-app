import styled from 'styled-components';

export interface Styles {
  margin?: string;
  padding?: string;
}

export const StyledBox = styled.div<Styles>`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;