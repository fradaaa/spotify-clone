import { Playlist } from ".prisma/client";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import useSWR from "swr";
import { CreatePlaylistButton } from "../Buttons";
import { RingLoader } from "../Globals";
import { libraryItems, menuItems } from "./items";
import {
  NavContainer,
  NavItem,
  NavItemIcon,
  NavItemLink,
  NavItemText,
  NavLibrary,
  NavList,
  NavLogo,
  NavMenu,
  NavPlaylists,
  NavSectionName,
  StyledNav,
} from "./style";

const Nav = () => {
  const { user } = useUser();
  const { data, error } = useSWR<Playlist[]>(user && "/api/me/playlists");

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
          <NavList>
            {data ? (
              data.map(({ name, id }, i) => (
                <NavItem key={i}>
                  <Link href={`/playlist/${id}`}>
                    <NavItemLink>
                      <NavItemText>{name}</NavItemText>
                    </NavItemLink>
                  </Link>
                </NavItem>
              ))
            ) : (
              <RingLoader />
            )}
          </NavList>
        </NavPlaylists>
        <CreatePlaylistButton />
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
