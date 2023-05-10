import { Box } from "@UI/atoms/Box/Box";
import Button from "@UI/atoms/Button/Button";
import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import { CompactView } from "@UI/templates/posts/CompactView/CompactView";
import { usePostStore } from "@store/usePostStore.hook";
import { useRoutes } from "@utils/useRoutes.hook";
import React from "react";
import { StyledBox, StyledContainer } from "./BlogPage.styles";
import { PlusIcon } from "@UI/atoms/Icons/PlusIcon";
import { Divider } from "@UI/atoms/Divider/Divider";
import { PostsNotFound } from "@UI/templates/textBlocks/PostsNotFound";

export const BlogPage = () => {
  const { getPosts } = usePostStore();
  const posts = getPosts({ order: 'asc' });

  const { goTo } = useRoutes();

  return (
    <PageView>
      <StyledContainer>
        <Typography variant="h1">The Art, Science, and Culture Blog</Typography>
        <Button onClick={() => goTo('/post/new')}>Add post <PlusIcon /></Button>
      </StyledContainer>

      <Typography>
        Welcome to our blog, where we explore the fascinating intersections between art, science, and culture. Our mission is to inspire and educate our readers on the diverse and dynamic aspects of the human experience. From cutting-edge scientific discoveries to timeless works of art, we cover it all.
      </Typography>

      <Divider />
      <StyledBox>
        <Typography variant="h2">Latest Posts</Typography>
      </StyledBox>

      <Box>
        {posts.map((post) => {
          return (
            <Box key={post.id}>
              <CompactView post={post} />
            </Box>
          );
        })}

        {!posts.length && (
          <PostsNotFound />
        )}
      </Box>
    </PageView>
  );
};
