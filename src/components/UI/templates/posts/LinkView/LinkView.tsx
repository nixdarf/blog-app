import { ChevronRightIcon } from "@UI/atoms/Icons/ChevronRightIcon";
import { Link } from "@UI/atoms/Link/Link";
import { Typography } from "@UI/atoms/Typography/Typography";
import { PostType } from "@store/usePostStore.hook";
import React, { useContext } from "react";
import { StyledBox, StyledWrapper } from "./LinkView.styles";
import { Divider } from "@UI/atoms/Divider/Divider";
import { ThemeContext } from "styled-components";

interface LinkViewPropsType {
  post: PostType;
}

export const LinkView = ({ post }: LinkViewPropsType) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <Typography variant='title'>{post.title}</Typography>
      <Divider />

      <StyledBox>
        <Typography variant='body'>{post.overview}</Typography>
      </StyledBox>

      <Link href={`/post/view/${post.id}`}>
        Read more <ChevronRightIcon color={theme.colors.primary} />
      </Link>
    </StyledWrapper>
  );
};

