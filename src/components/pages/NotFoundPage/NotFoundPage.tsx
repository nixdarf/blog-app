import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import React from "react";
import { Link } from "react-router-dom";
import { StyledWrapper } from "./NotFoundPage.styles";

export const NotFoundPage = () => {
  return (
    <PageView>
      <StyledWrapper>
        <Typography variant="h1">Page Not Found</Typography>
        <Typography>We're sorry, the page you're looking for could not be found.</Typography>

        <Typography variant="h2">Possible Reasons</Typography>
        <Typography>There are several reasons why you might have landed on this page:</Typography>

        <ul>
          <li>The URL might be misspelled.</li>
          <li>The page you're looking for might have been deleted or moved.</li>
          <li>There might be a technical issue with our website.</li>
        </ul>

        <Typography variant="h3">What to Do Next</Typography>
        <Typography>Here are some steps you can take to find what you're looking for:</Typography>

        <ul>
          <li>Check the URL to make sure it's spelled correctly.</li>
          <li>Use the search bar to look for the content you want.</li>
          <li>Go to the <Link to='/'>homepage</Link> and navigate from there.</li>
        </ul>

        <Typography>If you're still having trouble, please <Link to='/contact'>contact us</Link> and we'll do our best to help you find what you're looking for.</Typography>
      </StyledWrapper>
    </PageView>
  );
};