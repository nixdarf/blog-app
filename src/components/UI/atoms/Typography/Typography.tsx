import React from 'react';
import { TextVariant, variantMap } from './Typography.styles';

interface TypographyPropsType {
  variant?: TextVariant;
  children: React.ReactNode;
};

export const Typography = ({ variant = 'body', children }: TypographyPropsType) => {
  const StyledComponent = variantMap[variant];

  return <StyledComponent>{children}</StyledComponent>;
};