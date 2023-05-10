import { Typography } from "@UI/atoms/Typography/Typography";
import { YoutubeVideoPlayer } from "@UI/atoms/YoutubeVideoBlock/YoutubeVideoBlock";
import { PostType } from "@store/usePostStore.hook";
import React from "react";
import { StyledBox, StyledWrapper } from "./VideoView.style";
import { Divider } from "@UI/atoms/Divider/Divider";
import { ButtonGroup } from "@UI/atoms/ButtonGroup/ButtonGroup";
import Button from "@UI/atoms/Button/Button";
import { ChevronRightIcon } from "@UI/atoms/Icons/ChevronRightIcon";
import { useRoutes } from "@utils/useRoutes.hook";

interface VideoViewPropsType {
  post: PostType;
}

export const VideoView = ({ post }: VideoViewPropsType) => {
  const { goTo } = useRoutes();

  return (
    <StyledWrapper>
      <Typography variant='title'>{post.title}</Typography>
      <Divider />

      <StyledBox>
        <Typography variant='body'>{post.overview}</Typography>
        <YoutubeVideoPlayer src={post.videoUrl} />
      </StyledBox>

      <ButtonGroup>
        <Button onClick={() => goTo(`/post/view/${post.id}`)} rounded>Read more <ChevronRightIcon /></Button>
      </ButtonGroup>
    </StyledWrapper>
  );
};

