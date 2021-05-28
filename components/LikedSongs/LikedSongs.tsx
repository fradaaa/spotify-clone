import Head from "next/head";
import { ContentGradient } from "../Globals";
import PlaylistControls from "../Playlist/PlaylistControls";
import LikedSongHeader from "./LikedSongHeader";
import LikedSongsTracks from "./LikedSongsTracks";

const LikedSongs = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Liked Songs</title>
      </Head>
      <LikedSongHeader />
      <ContentGradient style={{ backgroundColor: "rgb(80, 56, 160)" }} />
      <PlaylistControls />
      <LikedSongsTracks />
    </>
  );
};

export default LikedSongs;
