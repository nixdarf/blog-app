import { Box } from '@UI/atoms/Box/Box';
import React, { ChangeEventHandler } from 'react';
import { StyledTextareaField, StyledLabel } from './Textarea.styles';

interface TextareaPropsType {
  label?: string;
  rows?: number;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Textarea = ({ label, rows = 3, value, onChange }: TextareaPropsType) => {
  return (
    <Box>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledTextareaField rows={rows} value={value} onChange={onChange} />
    </Box>
  );
};
