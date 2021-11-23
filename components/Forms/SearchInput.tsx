import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import {
  ClearSearchIcon,
  SearchIcon,
  SearchInputContainer,
  StyledSearchInput,
} from "./style";

type SearchInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearField: () => void;
  placeholder: string;
  value: string;
};

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ handleChange, clearField, placeholder, value }, ref) => {
    return (
      <SearchInputContainer>
        <SearchIcon htmlFor="searchInput">
          <AiOutlineSearch />
        </SearchIcon>
        <StyledSearchInput
          ref={ref}
          type="search"
          name="searchInput"
          id="searchInput"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {value && (
          <ClearSearchIcon
            aria-label="Clear search"
            width="20"
            height="20"
            onClick={clearField}
          >
            <MdClear />
          </ClearSearchIcon>
        )}
      </SearchInputContainer>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
