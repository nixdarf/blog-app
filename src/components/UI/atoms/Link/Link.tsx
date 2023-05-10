import React from "react";
import { Typography } from "@UI/atoms/Typography/Typography";
import { useRoutes } from "@utils/useRoutes.hook";
import { StyledLinkButton } from "./Link.styles";

interface LinkPropsType {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children }: LinkPropsType) => {
  const { goTo } = useRoutes();

  return (
    <Typography variant='caption'>
      <StyledLinkButton onClick={() => goTo(href)}>{children}</StyledLinkButton>
    </Typography>
  );
};