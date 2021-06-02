import styled from "@emotion/styled";

export const StyledMain = styled.main`
  grid-area: main;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.surface};
`;

export const MainContainer = styled.div`
  isolation: isolate;
  position: relative;
  height: 100%;
`;
