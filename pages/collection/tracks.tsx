import Head from "next/head";
import LikedSongs from "../../components/LikedSongs/LikedSongs";

const CollectionTracks = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Liked Songs</title>
      </Head>
      <LikedSongs />
    </>
  );
};

export default CollectionTracks;
