import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const StyledNav = styled.nav`
  grid-area: nav;
  height: 100%;
  width: 75px;
  overflow: hidden;
  border-right: ${({ theme }) => `1px solid ${theme.darkBorder}`};

  ${mq["lg"]} {
    width: 250px;
  }
`;

export const NavContainer = styled(FlexCol)`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onSurface};
`;

export const NavLogo = styled(FlexRow)`
  margin-bottom: 30px;
  padding: 20px;
  display: none;

  ${mq["lg"]} {
    display: flex;
  }
`;

export const NavAltLogo = styled(FlexRow)`
  margin-bottom: 30px;
  padding: 20px;
  display: flex;

  ${mq["lg"]} {
    display: none;
  }
`;

export const NavLibrary = styled.div`
  margin-bottom: 20px;
`;

export const NavMenu = styled(NavLibrary)``;

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

const animateGradient = keyframes`
  from {
    background-position: 100% 50%;
  } to {
    background-position: 0% 50%;
  }
`;

type NavItemProps = {
  highlight?: boolean;
};

export const NavItem = styled.div<NavItemProps>`
  cursor: pointer;
  transition: color 0.1s ease-in;
  background-size: 150% 150%;

  ${({ highlight, theme }) => ({
    color: highlight ? theme.primary : theme.onSurface,
    borderLeft: highlight ? `3px solid ${theme.primary}` : "none",
    padding: highlight ? "10px 10px 10px 27px" : "10px 10px 10px 30px",
    backgroundImage: highlight
      ? "linear-gradient(90deg, rgba(29,185,84,0.5) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 100%);"
      : "none",
    animation: highlight ? `${animateGradient} 0.5s ease 1` : "",
  })}

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
  display: none;

  ${mq["lg"]} {
    display: inline-block;
  }
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

export const NavPlaylistsDropdown = styled(FlexRow)`
  display: flex;
  justify-content: stretch;
  margin: 20px 0 auto;

  ${mq["lg"]} {
    display: none;
  }
`;

export const NavPlaylistsDropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.surface2};
  width: 250px;
  z-index: 5;
`;
