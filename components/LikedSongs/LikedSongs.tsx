import Head from "next/head";
import LikedSongHeader from "./LikedSongHeader";
import LikedSongsTracks from "./LikedSongsTracks";
import { LikedSongsContainer } from "./style";

const LikedSongs = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Liked Songs</title>
      </Head>
      <LikedSongsContainer>
        <LikedSongHeader />
        <LikedSongsTracks />
      </LikedSongsContainer>
    </>
  );
};

export default LikedSongs;
