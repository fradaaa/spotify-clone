import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
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

export default withPageAuthRequired(Liked);
