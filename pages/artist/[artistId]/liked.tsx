import Head from "next/head";
import ArtistLikedSongs from "../../../components/Artist/ArtistLikedSongs";

const Liked = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Liked Songs</title>
      </Head>
      <ArtistLikedSongs />
    </>
  );
};

export default Liked;
