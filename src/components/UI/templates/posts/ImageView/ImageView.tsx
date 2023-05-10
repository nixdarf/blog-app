import { Link } from "@UI/atoms/Link/Link";
import { Typography } from "@UI/atoms/Typography/Typography";
import { PostType } from "@store/usePostStore.hook";
import React, { useContext } from "react";
import { StyledImage, StyledWrapper } from "./ImageView.styles";
import { ChevronRightIcon } from "@UI/atoms/Icons/ChevronRightIcon";
import { ThemeContext } from "styled-components";

interface ImageViewPropsType {
  post: PostType;
}

export const ImageView = ({ post }: ImageViewPropsType) => {
  const theme = useContext(ThemeContext);
  
  return (
    <StyledWrapper>
      <StyledImage src={post.imgUrl} />
      <Typography variant='body'>{post.overview}</Typography>

      <Link href={`/post/view/${post.id}`}>Read more <ChevronRightIcon color={theme.colors.primary} /></Link>
    </StyledWrapper>
  );
};

