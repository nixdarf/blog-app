import { NavLink, NavLinkPropsType } from '@UI/molecules/NavLink/NavLink';
import React from 'react';
import { StyledNavMenuWrapper } from './NavMenu.styles';

interface NavMenuPropsType {
  links: NavLinkPropsType[];
}

export const NavMenu = ({ links }: NavMenuPropsType) => {
  return (
    <StyledNavMenuWrapper>
      {links.map((item, key) => <NavLink key={key} {...item} />)}
    </StyledNavMenuWrapper>
  );
};