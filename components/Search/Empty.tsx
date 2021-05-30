import {
  EmptyResultsContainer,
  EmptyResultsTitle,
  EmptyResultsPar,
} from "./style";

const Empty = ({ query }: { query: string }) => {
  return (
    <EmptyResultsContainer>
      <EmptyResultsTitle>
        No results found for &laquo;{query}&raquo;
      </EmptyResultsTitle>
      <EmptyResultsPar>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </EmptyResultsPar>
    </EmptyResultsContainer>
  );
};

export default Empty;
