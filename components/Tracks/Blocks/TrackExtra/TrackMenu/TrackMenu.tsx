import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { usePlaylist, useTrack } from "../../../../../Hooks";
import Dropdown from "../../../../Dropdown/Dropdown";
import { TrackMenuContainer, TrackMenuLink, TrackMenuOption } from "./style";
import TrackMenuAddToPlaylist from "./TrackMenuAddToPlaylist";
import TrackMenuArtists from "./TrackMenuArtists";
import TrackMenuRemoveFromPlaylist from "./TrackMenuRemoveFromPlaylist";

const TrackMenu = () => {
  const router = useRouter();
  const user = useUser();
  const { album, artists } = useTrack();
  const playlist = usePlaylist();

  return (
    <Dropdown icon={<IoEllipsisHorizontalSharp />}>
      <TrackMenuContainer>
        <TrackMenuArtists artists={artists} />
        <TrackMenuOption>
          <Link href={`/album/${album.id}`} passHref>
            <TrackMenuLink href={`/album/${album.id}`}>
              Go to album
            </TrackMenuLink>
          </Link>
        </TrackMenuOption>
        {user && <TrackMenuAddToPlaylist />}
        {user &&
          router.asPath.includes("playlist") &&
          user?.id === playlist?.ownerId && <TrackMenuRemoveFromPlaylist />}
      </TrackMenuContainer>
    </Dropdown>
  );
};

export default TrackMenu;
