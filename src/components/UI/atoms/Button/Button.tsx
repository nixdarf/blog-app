import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonPropsType {
  onClick: () => void;
  rounded?: boolean;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ onClick, rounded = false, variant = 'primary', children }: ButtonPropsType) => {
  return (
    <StyledButton onClick={onClick} rounded={rounded} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
