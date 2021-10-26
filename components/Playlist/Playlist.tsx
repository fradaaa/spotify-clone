import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useCallback } from "react";
import { ColorContext, PlayContext } from "../../Context";
import { useAudioHelpers, usePlaylist } from "../../Hooks";
import AddTracks from "./AddTracks";
import PlaylistControls from "./PlaylistControls";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTracks from "./PlaylistTracks";

const Playlist = () => {
  const { user } = useUser();
  const { id, name, ownerId } = usePlaylist();
  const { playContent } = useAudioHelpers();

  const play = useCallback(
    (index: number) => {
      playContent(id, "playlist", index);
    },
    [id, playContent]
  );

  return (
    <PlayContext.Provider value={play}>
      <ColorContext.Provider value={"#424242"}>
        <Head>
          <title>{`Spotify Clone - ${name}`}</title>
        </Head>
        <PlaylistHeader />
        <PlaylistControls />
        {/* {user?.sub === ownerId && <AddTracks />} */}
        <PlaylistTracks />
      </ColorContext.Provider>
    </PlayContext.Provider>
  );
};

export default Playlist;
