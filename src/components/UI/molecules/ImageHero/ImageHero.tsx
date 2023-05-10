
import React, { } from "react";
import { PostType } from "@store/usePostStore.hook";
import { ImageHeroContainer, ImageHeroImage } from "./ImageHero.styles";

interface ImageHeroPropsType {
  imgUrl: PostType['imgUrl'];
}

export const ImageHero = ({ imgUrl }: ImageHeroPropsType) => {
  return (
    <ImageHeroContainer>
      <ImageHeroImage src={imgUrl} alt="Hero Image" />
    </ImageHeroContainer>
  );
};
