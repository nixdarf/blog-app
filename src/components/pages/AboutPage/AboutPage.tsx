import { Typography } from "@UI/atoms/Typography/Typography";
import { PageView } from "@UI/templates/pages/PageView/PageView";
import React from "react";
import { StyledBox, StyledWrapper } from "./AboutPage.styles";
import { Divider } from "@UI/atoms/Divider/Divider";

export const AboutPage = () => {
  return (
    <PageView>
      <StyledWrapper>
        <Typography variant="h1">About Us</Typography>
        <Divider />

        <StyledBox>
          <Typography>Welcome to our blog! We are a team of writers, artists, and scientists who are passionate about sharing our love of art, science, and culture with the world.</Typography>
        </StyledBox>

        <Typography variant="title">Our Mission</Typography>
        <Typography>Our mission is to inspire and educate our readers on the fascinating intersections between art, science, and culture. We believe that these fields are deeply interconnected and that each one offers unique insights into the human experience.</Typography>

        <Typography variant="title">Our Team</Typography>

        <Typography variant="h3">[Name], Editor-in-Chief</Typography>
        <Typography>[Name] is a seasoned writer and editor with a deep passion for art and culture. She has worked for several prestigious publications and has won numerous awards for her writing. In her spare time, she enjoys visiting museums and attending cultural events.</Typography>

        <Typography variant="h3">[Name], Science Writer</Typography>
        <Typography>[Name] is a PhD candidate in neuroscience with a passion for science writing. She is a regular contributor to several science publications and is known for her ability to make complex scientific concepts accessible to a general audience.</Typography>

        <Typography variant="h3">[Name], Art Writer</Typography>
        <Typography>[Name] is an artist and writer with a keen eye for beauty and a deep appreciation for the arts. She has written extensively on art and culture and has exhibited her own work in galleries across the country.</Typography>

        <Typography variant="h3">[Name], Culture Writer</Typography>
        <Typography>[Name] is a cultural critic with a passion for exploring the connections between art, politics, and society. She has written for several major publications and has been a frequent guest on radio and television programs.</Typography>

      </StyledWrapper >
    </PageView >
  );
};
