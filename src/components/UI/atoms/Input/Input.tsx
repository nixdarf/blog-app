import React, { ChangeEventHandler } from 'react';
import { StyledInputField, StyledLabel, StyledWrapper } from './Input.styles';

interface InputPropsType {
  label?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ label, value, onChange }: InputPropsType) => {
  return (
    <StyledWrapper>
      {label && <StyledLabel variant='label'>{label}</StyledLabel>}
      <StyledInputField type="text" value={value} onChange={onChange} />
    </StyledWrapper>
  );
};

export default Input;
