import { AiOutlineSearch } from "react-icons/ai";
import {
  SearchPlaceholderContainer,
  SearchPlaceholderIcon,
  SearchPlaceholderText,
} from "./style";

const SearchPlaceholder = () => {
  return (
    <SearchPlaceholderContainer>
      <SearchPlaceholderText>Search for something</SearchPlaceholderText>
      <SearchPlaceholderIcon>
        <AiOutlineSearch />
      </SearchPlaceholderIcon>
    </SearchPlaceholderContainer>
  );
};

export default SearchPlaceholder;
