import { Box } from '@UI/atoms/Box/Box';
import Input from '@UI/atoms/Input/Input';
import { PostType } from '@store/usePostStore.hook';
import React from 'react';
import { StyledItem, StyledList } from './Autocomplete.style';

interface AutocompletePropsType {
  label: string;
  suggestions: PostType[];
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (suggestion: PostType) => void;
}

export const Autocomplete: React.FC<AutocompletePropsType> = ({
  label,
  suggestions,
  inputValue,
  onChange,
  onSelect,
}) => {
  const handleSelect = (suggestion: PostType) => {
    onSelect(suggestion);
  };

  return (
    <Box>
      <Input label={label} value={inputValue} onChange={onChange} />

      {inputValue !== '' && suggestions.length > 0 && (
        <StyledList>
          {suggestions.map((suggestion) => (
            <StyledItem key={suggestion.id} onClick={() => handleSelect(suggestion)}>
              {suggestion.title}
            </StyledItem>
          ))}
        </StyledList>
      )}
    </Box>
  );
};
