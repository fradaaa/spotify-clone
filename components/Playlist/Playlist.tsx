import Head from "next/head";
import { usePlaylist } from "../../Hooks";
import AddTracks from "./AddTracks";
import PlaylistControls from "./PlaylistControls";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTracks from "./PlaylistTracks";

const Playlist = () => {
  const { name } = usePlaylist();

  return (
    <>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      <PlaylistHeader />
      <PlaylistControls />
      <PlaylistTracks />
      <AddTracks />
    </>
  );
};

export default Playlist;
