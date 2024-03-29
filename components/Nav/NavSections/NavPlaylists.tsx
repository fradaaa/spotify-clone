import { useUser } from "@supabase/auth-helpers-react";
import { Playlist } from "@prisma/client";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";
import useSWR from "swr";
import { RingLoader } from "../../Globals";
import { NavItem, NavItemIcon, NavItemLink, NavItemText } from "../style";
import {
  NavList,
  NavPlaylistsContainer,
  NavPlaylistsMobile,
  NavSectionName,
} from "./style";

const NavPlaylists = () => {
  const user = useUser();
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
                <Link href={`/playlist/${id}`} passHref>
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
      <NavPlaylistsMobile>
        <NavItem highlight={router.asPath === "/collection/playlists"}>
          <Link href="/collection/playlists" passHref>
            <NavItemLink>
              <NavItemIcon>
                <BiRightArrow />
              </NavItemIcon>
            </NavItemLink>
          </Link>
        </NavItem>
      </NavPlaylistsMobile>
    </>
  );
};

export default NavPlaylists;
