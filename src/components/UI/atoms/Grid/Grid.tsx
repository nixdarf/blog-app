import styled from 'styled-components';

type GridPropsType = {
  gap?: string;
};

export const Grid = styled.div<GridPropsType>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: ${p => p.gap || p.theme.spacing.md};
  justify-items: stretch;
  align-items: stretch;
`;
