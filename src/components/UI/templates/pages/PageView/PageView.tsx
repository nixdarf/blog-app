import { Footer } from "@UI/molecules/Footer/Footer";
import { Navbar } from "@UI/organisms/Navbar/Navbar";
import React from "react";
import { StyledWrapper, StyledContainer } from "./PageView.styles";
import { Divider } from "@UI/atoms/Divider/Divider";

interface PageViewPropsType {
  children: React.ReactNode;
};

export const PageView = ({ children }: PageViewPropsType) => {
  return (
    <StyledWrapper>
      <Navbar />
      <Divider />
      <StyledContainer>
        {children}
      </StyledContainer>
      <Footer />
    </StyledWrapper>
  );
};