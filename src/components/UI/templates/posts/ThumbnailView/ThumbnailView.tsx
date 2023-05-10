import { CustomImage } from "@UI/atoms/CustomImage/CustomImage";
import React from "react";
import { PostType } from "@store/usePostStore.hook";
import { Box } from "@UI/atoms/Box/Box";
import { Link } from "@UI/atoms/Link/Link";
import { StyledWrapper } from "./ThumbnailView.styles";

interface ThumbnailViewPropsType {
  posts: PostType[];
}

export const ThumbnailView = ({ posts }: ThumbnailViewPropsType) => {
  return (
    <StyledWrapper>
      {posts.map((post) => {
        return (
          <Box key={post.id}>
            <Link href={`/post/view/${post.id}`}>
              <CustomImage src={post.imgUrl} width={200} />
            </Link>
          </Box>
        );
      })}
    </StyledWrapper>
  );
};