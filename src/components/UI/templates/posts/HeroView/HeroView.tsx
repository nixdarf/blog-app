import { Link } from "@UI/atoms/Link/Link";
import { Typography } from "@UI/atoms/Typography/Typography";
import { ImageHero } from "@UI/molecules/ImageHero/ImageHero";
import { PostType } from "@store/usePostStore.hook";
import React, { useContext } from "react";
import { StyledContent, StyledWrapper } from "./HeroView.styles";
import { ChevronRightIcon } from "@UI/atoms/Icons/ChevronRightIcon";
import { ThemeContext } from "styled-components";

interface HeroViewPropsType {
  post: PostType;
}

export const HeroView = ({ post }: HeroViewPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <ImageHero imgUrl={post.imgUrl} />

      <StyledContent>
        <Typography variant='body'>{post.title}</Typography>
        <Typography variant='caption'>{post.overview}</Typography>

        <Link href={`/post/view/${post.id}`}>Read more <ChevronRightIcon color={theme.colors.primary} /></Link>
      </StyledContent>
    </StyledWrapper>
  );
};

