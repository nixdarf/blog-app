import { Typography } from "@UI/atoms/Typography/Typography";
import { PostEditor } from "@UI/organisms/PostEditor/PostEditor";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import { PostView } from "@UI/templates/posts/PostView/PostView";
import { usePostStore } from "@store/usePostStore.hook";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { StyledWrapper } from "./PostPage.styles";
import { useRoutes } from "@utils/useRoutes.hook";

enum ModeType {
  New = 'new',
  Edit = 'edit',
  View = 'view',
};

export const PostPage = () => {
  const { mode, id } = useParams<{ mode: string; id: string; }>();
  const { getPostById } = usePostStore();
  const { from } = useRoutes();

  const post = getPostById(id as string);

  return (
    <PageView>
      {
        match(true)
          .with(mode === ModeType.New && Boolean(!post), () => <PostEditor />)
          .with(mode === ModeType.Edit && Boolean(post), () => post && <PostEditor post={post} />)
          .with(mode === ModeType.View && Boolean(post), () => post && <PostView post={post} />)
          .otherwise(() => (
            <StyledWrapper>
              <Typography variant="h1">Post Not Found</Typography>
              <Typography>We're sorry, but the post you're trying to edit or view could not be found. Here are some reasons why this might be happening:</Typography>

              <ul>
                <li>The post might have been deleted or unpublished.</li>
                <li>The post URL might be misspelled or incorrect.</li>
              </ul>

              <Typography variant="h3">What to Do Next</Typography>
              <Typography>Here are some steps you can take to resolve this issue:</Typography>

              <ul>
                <li>Check the URL to make sure it's spelled correctly.</li>
                <li>Go back to the <Link to={from}>previous</Link> page and check if the post is still available.</li>
                <li>Go to the <Link to='/'>homepage</Link> and navigate from there.</li>
              </ul>

              <Typography>If you're still having trouble, please <Link to='/contact'>contact us</Link> and we'll do our best to help you find a solution.</Typography>
            </StyledWrapper>
          ))
      }
    </PageView>
  );
};

