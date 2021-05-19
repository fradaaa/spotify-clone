import Link from "next/link";
import { libraryItems, menuItems } from "./items";
import {
  NavContainer,
  NavItem,
  NavItemIcon,
  NavItemLink,
  NavItemText,
  NavLibrary,
  NavLogo,
  NavMenu,
  NavPlaylists,
  NavSectionName,
  StyledNav,
} from "./style";

const Nav = () => {
  return (
    <StyledNav>
      <NavContainer>
        <NavLogo>
          <img src="/logo.png" alt="logo" />
        </NavLogo>
        <NavMenu>
          {menuItems.map(({ Icon, link, text }, i) => (
            <NavItem key={i}>
              <Link href={link}>
                <NavItemLink>
                  <NavItemIcon>{Icon}</NavItemIcon>
                  <NavItemText>{text}</NavItemText>
                </NavItemLink>
              </Link>
            </NavItem>
          ))}
        </NavMenu>
        <NavLibrary>
          <NavSectionName>Your Library</NavSectionName>
          {libraryItems.map(({ Icon, link, text }, i) => (
            <NavItem key={i}>
              <Link href={link}>
                <NavItemLink>
                  <NavItemIcon>{Icon}</NavItemIcon>
                  <NavItemText>{text}</NavItemText>
                </NavItemLink>
              </Link>
            </NavItem>
          ))}
        </NavLibrary>
        <NavPlaylists>
          <NavSectionName>Playlists</NavSectionName>
        </NavPlaylists>
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
