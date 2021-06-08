import { withPageAuthRequired } from "@auth0/nextjs-auth0";
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

export default withPageAuthRequired(CollectionTracks);
