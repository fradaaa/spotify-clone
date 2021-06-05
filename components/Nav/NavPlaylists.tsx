import { useUser } from "@auth0/nextjs-auth0";
import { Playlist } from "@prisma/client";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";
import useSWR from "swr";
import { RingLoader } from "../Globals";
import {
  NavItem,
  NavItemIcon,
  NavItemLink,
  NavItemText,
  NavList,
  NavPlaylistsContainer,
  NavPlaylistsDropdown,
  NavSectionName,
} from "./style";

const NavPlaylists = () => {
  const { user } = useUser();
  const { data } = useSWR<Playlist[]>(() =>
    user ? "/api/me/playlists" : null
  );
  const router = useRouter();

  return (
    <>
      <NavPlaylistsContainer>
        <NavSectionName>Playlists</NavSectionName>
        <NavList>
          {!user ? null : data ? (
            data.map(({ name, id }, i) => (
              <NavItem highlight={router.asPath === `/playlist/${id}`} key={i}>
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
      </NavPlaylistsContainer>
      <NavPlaylistsDropdown>
        <NavItem highlight={router.asPath === "/collection/playlists"}>
          <Link href="/collection/playlists">
            <NavItemLink>
              <NavItemIcon>
                <BiRightArrow />
              </NavItemIcon>
            </NavItemLink>
          </Link>
        </NavItem>
      </NavPlaylistsDropdown>
    </>
  );
};

export default NavPlaylists;
