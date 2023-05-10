import { Box } from "@UI/atoms/Box/Box";
import Button from "@UI/atoms/Button/Button";
import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import { CompactView } from "@UI/templates/posts/CompactView/CompactView";
import { usePostStore } from "@store/usePostStore.hook";
import { useRoutes } from "@utils/useRoutes.hook";
import React from "react";
import { StyledBox, StyledContainer, StyledWrapper } from "./BlogPage.styles";
import { PlusIcon } from "@UI/atoms/Icons/PlusIcon";
import { Divider } from "@UI/atoms/Divider/Divider";
import { Link } from "react-router-dom";

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
          <StyledWrapper>
            <Typography variant="h1">Posts Not Found</Typography>
            <Typography>We're sorry, but there are no posts to display. Here are some reasons why this might be happening:</Typography>

            <ul>
              <li>The post might have been deleted or unpublished.</li>
              <li>The post URL might be misspelled or incorrect.</li>
            </ul>

            <Typography variant="h3">What to Do Next</Typography>
            <Typography>Here are some steps you can take to resolve this issue:</Typography>

            <ul>
              <li>Check the URL to make sure it's spelled correctly.</li>
              <li><Link to={'/post/new'}>Add</Link> a new post to the blog.</li>
            </ul>

            <Typography>If you're still having trouble, please <Link to='/contact'>contact us</Link> and we'll do our best to help you find a solution.</Typography>
          </StyledWrapper>
        )}
      </Box>
    </PageView>
  );
};
