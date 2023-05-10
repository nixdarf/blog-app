import { Typography } from "@UI/atoms/Typography/Typography";
import { StyledWrapper } from "./TestBlocks.styles";
import React from "react";
import { Link } from "react-router-dom";

export const NoSearchResults = () => {
  return (
    <StyledWrapper>
      <Typography variant="title">No Posts Matching Your Search</Typography>
      <Typography>We're sorry, but we couldn't find any posts that match your search criteria. Here are some reasons why this might be happening:</Typography>

      <ul>
        <li>There might not be any posts on our blog that match your search.</li>
        <li>The search term might be misspelled or too specific.</li>
        <li>The search filters might be too narrow.</li>
      </ul>

      <Typography variant="h3">What to Do Next</Typography>
      <Typography>Here are some steps you can take to find the content you're looking for:</Typography>

      <ul>
        <li>Try searching again with different keywords or filters.</li>
        <li>Browse our <Link to='/blog'>blog</Link> to find related content.</li>
        <li>Check back later or subscribe to our newsletter to receive updates on new content.</li>
      </ul>

      <Typography>If you're still having trouble, please <Link to='/contact'>contact us</Link> and we'll do our best to help you find what you're looking for.</Typography>
    </StyledWrapper>
  );
};