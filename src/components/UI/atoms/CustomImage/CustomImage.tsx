import React from "react";

interface CustomImagePropsType {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const CustomImage = ({ src, alt, width, height }: CustomImagePropsType) => {
  return <img
    src={src}
    width={width}
    height={height}
    alt={alt || 'Image'} />;
};
