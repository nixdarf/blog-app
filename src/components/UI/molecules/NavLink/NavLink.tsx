import React from 'react';
import { Typography } from '../../atoms/Typography/Typography';
import { StyledNavLinkContainer, StyledNavLink } from './NavLink.styles';
import { useLocation } from 'react-router-dom';

export interface NavLinkPropsType {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkPropsType) => {
  const { pathname } = useLocation(); 

  return (
    <StyledNavLinkContainer active={pathname === href}>
      <StyledNavLink to={href}>
        <Typography variant='label'>{title}</Typography>
      </StyledNavLink>
    </StyledNavLinkContainer>
  );
};