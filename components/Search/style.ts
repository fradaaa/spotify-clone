import styled from "@emotion/styled";

export const SearchHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #161616;
  padding: 10px 20px;
  z-index: 5;
`;

export const SearchResultsContainer = styled.div`
  color: ${({ theme }) => theme.onSurface};
  padding: 20px;
`;

export const EmptyResultsContainer = styled.div`
  text-align: center;
`;

export const EmptyResultsTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const EmptyResultsPar = styled.p``;
