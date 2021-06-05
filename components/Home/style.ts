import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const HomeContainer = styled(FlexRow)`
  justify-content: center;
  height: 100%;
`;

export const ButtonsContainer = styled(FlexCol)`
  justify-content: center;
  align-items: center;

  ${mq["lg"]} {
    flex-direction: row;
  }
`;

export const SearchLink = styled(StyledLink)`
  text-decoration: underline;
`;
