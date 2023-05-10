import { Typography } from "@UI/atoms/Typography/Typography";
import { StyledWrapper } from "./TestBlocks.styles";
import React from "react";
import { Link } from "react-router-dom";

export const PostsNotFound = () => {
  return (
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
  );
};