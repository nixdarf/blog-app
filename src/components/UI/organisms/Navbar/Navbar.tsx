import { CustomImage } from "@UI/atoms/CustomImage/CustomImage";
import { NavMenu } from "@UI/molecules/NavMenu/NavMenu";
import { usePostStore } from "@store/usePostStore.hook";
import React from "react";
import logo from "@assets/logo.svg";
import { StyledNavbarWrapper, StyledBarsWrapper, StyledNavMenuWrapper } from "./Navbar.styles";
import { SearchBar } from "../SearchBar/SearchBar";


export const Navbar = () => {
  const { getPosts } = usePostStore();
  const posts = getPosts({});
  const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <StyledNavbarWrapper>
      <StyledBarsWrapper>
        <CustomImage src={logo} />

        <StyledNavMenuWrapper>
          <NavMenu links={links} />
        </StyledNavMenuWrapper>
      </StyledBarsWrapper>

      <SearchBar posts={posts} />
    </StyledNavbarWrapper>
  );
};
