import React from 'react';
import { StyledBox, Styles } from './Box.styles';

interface BoxPropsType extends Styles {
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

export const Box = (props: BoxPropsType) => {
  return (
    <StyledBox {...props}>{props.children}</StyledBox>
  );
};