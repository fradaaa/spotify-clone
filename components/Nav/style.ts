import styled from "@emotion/styled";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const StyledNav = styled.nav`
  grid-area: nav;
  height: 100%;
  min-width: 250px;
  overflow: hidden;
  border-right: ${({ theme }) => `1px solid ${theme.darkBorder}`};
`;

export const NavContainer = styled(FlexCol)`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onSurface};
`;

export const NavLogo = styled(FlexRow)`
  margin-bottom: 30px;
  padding: 20px;
`;

export const NavLibrary = styled.div`
  margin-bottom: 20px;
`;

export const NavMenu = styled(NavLibrary)``;

export const NavPlaylists = styled(FlexCol)`
  height: 100%;
  overflow-y: hidden;
`;

export const NavList = styled.div`
  overflow-y: auto;
  height: 100%;
  scrollbar-width: thin;
  flex: 1;
`;

type NavItemProps = {
  highlight?: boolean;
};

export const NavItem = styled.div<NavItemProps>`
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  transition: color 0.1s ease-in;

  color: ${({ highlight, theme }) =>
    highlight ? theme.primary : theme.onSurface};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavItemLink = styled.a`
  display: flex;
`;

export const NavItemIcon = styled(FlexRow)`
  flex: 0 1 30px;

  & svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

export const NavItemText = styled.span`
  text-transform: uppercase;
  flex: 3;
  font-weight: 600;
`;

export const NavSectionName = styled(NavItem)`
  color: ${({ theme }) => `${theme.secondary} !important`};
  font-weight: 600;
  margin-bottom: 10px;
  cursor: default;
`;
