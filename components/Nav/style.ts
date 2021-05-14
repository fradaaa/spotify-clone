import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../Globals";

export const StyledNav = styled.nav`
  grid-area: nav;
  height: 100%;
`;

export const NavContainer = styled(FlexCol)`
  height: 100%;
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.onSurface};
`;

export const NavLibrary = styled(FlexCol)`
  margin-bottom: 20px;
`;

export const NavPlaylists = styled(FlexCol)``;

export const NavItem = styled(FlexRow)`
  padding: 10px 10px 10px 30px;
`;

export const NavSectionName = styled(NavItem)`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NavPlaylistItem = styled(NavItem)``;
