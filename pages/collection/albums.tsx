import Head from "next/head";
import { AlbumsCollection } from "../../components/Collection";

const Albums = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Collection - Albums</title>
      </Head>
      <AlbumsCollection />
    </>
  );
};

export default Albums;
