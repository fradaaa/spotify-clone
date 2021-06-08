import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { AlbumsCollection } from "../../components/Collection";

const Albums = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Collection - Artists</title>
      </Head>
      <AlbumsCollection />
    </>
  );
};

export default withPageAuthRequired(Albums);
