import { Playlist } from ".prisma/client";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import useSWR from "swr";
import { CreatePlaylistButton } from "../Buttons";
import { Button } from "../Buttons/style";
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
  const { user, isLoading } = useUser();
  const { data } = useSWR<Playlist[]>(() =>
    user ? "/api/me/playlists" : null
  );
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <StyledNav>
      <NavContainer>
        <NavLogo>
          <img src="/logo.png" alt="logo" />
        </NavLogo>
        <NavMenu>
          {menuItems.map(({ Icon, link, text }, i) => (
            <NavItem highlight={router.asPath === link} key={i}>
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
            <NavItem highlight={router.asPath === link} key={i}>
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
            {!user ? null : data ? (
              data.map(({ name, id }, i) => (
                <NavItem
                  highlight={router.asPath === `/playlist/${id}`}
                  key={i}
                >
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
        {isLoading ? null : user ? (
          <CreatePlaylistButton />
        ) : (
          <Button onClick={handleLogin}>LOGIN</Button>
        )}
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
