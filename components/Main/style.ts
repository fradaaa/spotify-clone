import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const StyledMain = styled.main`
  grid-area: main;
  flex: 4;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.surface};
`;

export const MainContainer = styled(FlexRow)``;
