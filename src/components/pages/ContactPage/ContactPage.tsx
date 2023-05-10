import { Divider } from "@UI/atoms/Divider/Divider";
import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import React from "react";
import { StyledBox, StyledWrapper } from "./ContactPage.styles";

export const ContactPage = () => {
  return (
    <PageView>
      <StyledWrapper >
        <Typography variant="h1">Contact Us</Typography>
        <Divider />

        <StyledBox>
          <Typography>We love hearing from our readers! If you have any questions, comments, or suggestions, please don't hesitate to get in touch with us.</Typography>
        </StyledBox>

        <Typography variant="title">Contact Information</Typography>

        <Typography variant="h3">Email</Typography>
        <Typography>You can reach us at [email address]. We try to respond to all emails within 24 hours.</Typography>

        <Typography variant="h3">Social Media</Typography>
        <Typography>You can also follow us on social media:</Typography>
        <Typography>
          <ul>
            <li>Twitter: [@mypersonal.blog]</li>
            <li>Instagram: [@mypersonal.blog]</li>
            <li>Facebook: [/mypersonal.blog]</li>
          </ul>
        </Typography>

        <Typography variant="h3">Write for Us</Typography>
        <Typography>We are always looking for talented writers to contribute to our blog. If you are interested in writing for us, please send us an email with your writing samples and a brief introduction.</Typography>

        <Typography variant="h3">Advertising</Typography>
        <Typography>If you are interested in advertising on our blog, please send us an email with your proposal and we will get back to you as soon as possible.</Typography>

        <Typography variant="h3">Contact Form</Typography>
        <Typography>If you prefer to contact us through our website, you can use the form below. We will get back to you as soon as possible.</Typography>
        <Typography>[Contact Form]</Typography>
      </StyledWrapper >
    </PageView>
  );
};

