import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../../atoms/Box/Box';

export const StyledNavLinkContainer = styled(Box)
  .attrs(p => ({ margin: `${p.theme.spacing.xs} ${p.theme.spacing.sm}`}))<{ active: boolean; }>`
    color: ${p => p.active ? p.theme.colors.primary : 'inherit'};
  `;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;