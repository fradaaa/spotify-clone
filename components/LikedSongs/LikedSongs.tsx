import { Album, Artist, Track } from ".prisma/client";
import { useUser } from "@auth0/nextjs-auth0";
import { useCallback } from "react";
import useSWR from "swr";
import { ColorContext, PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import { RingLoader } from "../Globals";
import LikedSongHeader from "./LikedSongHeader";
import LikedSongsTracks from "./LikedSongsTracks";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const LikedSongs = () => {
  const { user } = useUser();
  const { data } = useSWR<{ items: Data[]; total: number }>(
    () => (user ? "/api/me/tracks?offset=0&take=1" : null),
    {
      revalidateOnFocus: false,
    }
  );
  const { playContent } = useAudioHelpers();

  const play = useCallback(
    (index: number) => {
      playContent("42", "liked", index);
    },
    [playContent]
  );

  return user && data ? (
    <PlayContext.Provider value={play}>
      <ColorContext.Provider value={"rgb(80, 56, 160)"}>
        <LikedSongHeader userName={user.nickname!} total={data.total} />
        <LikedSongsTracks total={data.total} />
      </ColorContext.Provider>
    </PlayContext.Provider>
  ) : (
    <RingLoader />
  );
};

export default LikedSongs;
