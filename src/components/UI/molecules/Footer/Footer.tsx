import { Typography } from "@UI/atoms/Typography/Typography";
import { getCurrentYear } from "@utils/getCurrentYear";
import React from "react";
import { StyledLogo, StyledWrapper } from "./Footer.styles";
import { CustomImage } from "@UI/atoms/CustomImage/CustomImage";
import logo from "@assets/logo.svg";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <StyledWrapper>
      <StyledLogo><CustomImage src={logo} /></StyledLogo>
      <Typography variant="caption">&copy; {currentYear} My Personal Blog. All Rights Reserved.</Typography>
    </StyledWrapper>
  );
};
