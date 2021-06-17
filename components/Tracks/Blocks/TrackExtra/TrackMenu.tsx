import { Artist, Playlist } from ".prisma/client";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import useSWR from "swr";
import { useShow, useTrack } from "../../../../Hooks";
import Dropdown from "../../../Dropdown/Dropdown";
import {
  TrackMenuButton,
  TrackMenuContainer,
  TrackMenuLink,
  TrackMenuOption,
  TrackMenuOptionList,
  TrackMenuOptionsListContainer,
  TrackMenuText,
} from "./style";
import { AiFillCaretLeft } from "react-icons/ai";

const TrackMenu = () => {
  const { user } = useUser();
  const { album, artists } = useTrack();

  return (
    <Dropdown icon={<IoEllipsisHorizontalSharp />}>
      <TrackMenuContainer>
        {artists.length > 1 ? (
          <TrackMenuArtists artists={artists} />
        ) : (
          <TrackMenuOption>
            <Link href={`/artist/${artists[0].id}`} passHref>
              <TrackMenuLink href={`/artist/${artists[0].id}`}>
                Go to artist
              </TrackMenuLink>
            </Link>
          </TrackMenuOption>
        )}
        <TrackMenuOption>
          <Link href={`/album/${album.id}`} passHref>
            <TrackMenuLink href={`/album/${album.id}`}>
              Go to album
            </TrackMenuLink>
          </Link>
        </TrackMenuOption>
        {user && <AddToPlaylists />}
      </TrackMenuContainer>
    </Dropdown>
  );
};

const TrackMenuArtists = ({ artists }: { artists: Artist[] }) => {
  const { show, disableShow, enableShow } = useShow();

  return (
    <TrackMenuOptionList onMouseOver={enableShow} onMouseLeave={disableShow}>
      <AiFillCaretLeft /> Go to artist
      {show && (
        <TrackMenuOptionsListContainer>
          {artists.map(({ id, name }) => (
            <TrackMenuOption key={id}>
              <Link href={`/artist/${id}`} passHref>
                <TrackMenuLink href={`/artist/${id}`}>{name}</TrackMenuLink>
              </Link>
            </TrackMenuOption>
          ))}
        </TrackMenuOptionsListContainer>
      )}
    </TrackMenuOptionList>
  );
};

const AddToPlaylists = () => {
  const { show, disableShow, enableShow } = useShow();
  const { data } = useSWR<Playlist[]>(() => "/api/me/playlists");

  return (
    <TrackMenuOptionList onMouseOver={enableShow} onMouseLeave={disableShow}>
      <AiFillCaretLeft /> Add to playlist
      {show && data && (
        <TrackMenuOptionsListContainer>
          {data.map(({ id, name }) => (
            <AddTrack key={id} playlistId={id} name={name} />
          ))}
        </TrackMenuOptionsListContainer>
      )}
    </TrackMenuOptionList>
  );
};

const AddTrack = ({
  playlistId,
  name,
}: {
  playlistId: string;
  name: string;
}) => {
  const { id } = useTrack();
  const handleClick = async () => {
    try {
      await fetch(`/api/playlists/${playlistId}/tracks`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId: id,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TrackMenuOption>
      <TrackMenuButton onClick={handleClick}>
        <TrackMenuText>{name}</TrackMenuText>
      </TrackMenuButton>
    </TrackMenuOption>
  );
};

export default TrackMenu;
