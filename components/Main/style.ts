import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const StyledMain = styled.main`
  grid-area: main;
  flex: 4;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  overflow-y: scroll;
`;

export const MainContainer = styled(FlexRow)`
  height: 100%;
`;
