import Head from "next/head";
import { usePlaylist } from "../../Hooks";
import AddTracks from "./AddTracks";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTracks from "./PlaylistTracks";
import { PlaylistContainer } from "./style";

const Playlist = () => {
  const { name } = usePlaylist();

  return (
    <>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      <PlaylistContainer>
        <PlaylistHeader />
        <PlaylistTracks />
        <AddTracks />
      </PlaylistContainer>
    </>
  );
};

export default Playlist;
