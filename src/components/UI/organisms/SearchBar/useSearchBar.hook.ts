import { PostType } from '@store/usePostStore.hook';
import { useState } from 'react';
import { useRoutes } from '@utils/useRoutes.hook';

interface UseSearchBarReturnType {
  inputValue: string;
  filteredSuggestions: PostType[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (suggestion: PostType) => void;
  handleSearch: () => void;
}

export const useSearchBar = (suggestions: PostType[]): UseSearchBarReturnType => {
  const { goTo } = useRoutes();

  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<PostType[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter suggestions based on user input
    const filtered = suggestions.filter(suggestion => suggestion.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredSuggestions(filtered);
  };

  const handleSelect = (suggestion: PostType) => {
    setInputValue(suggestion.title);
    setFilteredSuggestions([]);

    goTo(`/search/${suggestion.title}`);
  };

  const handleSearch = () => goTo(`/search/${inputValue}`);

  return {
    inputValue,
    filteredSuggestions,
    handleChange,
    handleSelect,
    handleSearch,
  };
};
