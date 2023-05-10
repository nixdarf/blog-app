import { PostType } from "@store/usePostStore.hook";
import React from "react";
import { useSearchBar } from "./useSearchBar.hook";
import Button from "@UI/atoms/Button/Button";
import { SearchBarWrapper, StyledContainer } from "./SearchBar.styles";
import { Autocomplete } from "@UI/molecules/Autocomplete/Autocomplete";
import { SearchIcon } from "@UI/atoms/Icons/SearchIcon";

interface SearchBarPropsType {
  posts: PostType[];
}

export const SearchBar = ({ posts }: SearchBarPropsType) => {
  const { inputValue, filteredSuggestions, handleChange, handleSelect, handleSearch } = useSearchBar(posts);

  return (
    <SearchBarWrapper>
      <StyledContainer>
        <Autocomplete
          label='Search site'
          suggestions={filteredSuggestions}
          inputValue={inputValue}
          onChange={handleChange}
          onSelect={handleSelect} />
      </StyledContainer>
      <StyledContainer>
        <Button variant='secondary' onClick={handleSearch}>Search <SearchIcon /></Button>
      </StyledContainer>
    </SearchBarWrapper>
  );
};