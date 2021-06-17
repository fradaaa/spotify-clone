import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexCol, FlexRow } from "../../Globals";
import { NavItem } from "../style";

export const NavSectionContainer = styled.div`
  margin-bottom: 20px;
`;

export const NavSectionName = styled(NavItem)`
  color: ${({ theme }) => `${theme.secondary} !important`};
  font-weight: 600;
  margin-bottom: 10px;
  cursor: default;
  display: none;

  ${mq["lg"]} {
    display: flex;
  }
`;

export const NavPlaylistsContainer = styled(FlexCol)`
  height: 100%;
  overflow-y: hidden;
  display: none;

  ${mq["lg"]} {
    display: flex;
  }
`;

export const NavList = styled.div`
  overflow-y: auto;
  height: 100%;
  scrollbar-width: thin;
  flex: 1;
`;

export const NavPlaylistsMobile = styled(FlexRow)`
  display: flex;
  justify-content: stretch;
  margin: 20px 0 auto;

  ${mq["lg"]} {
    display: none;
  }
`;
