import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { PlaylistsCollection } from "../../components/Collection";

const Artists = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Collection - Artists</title>
      </Head>
      <PlaylistsCollection />
    </>
  );
};

export default withPageAuthRequired(Artists);
