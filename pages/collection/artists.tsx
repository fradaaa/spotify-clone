import Head from "next/head";
import { ArtistsCollection } from "../../components/Collection";

const Artists = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Collection - Artists</title>
      </Head>
      <ArtistsCollection />
    </>
  );
};

export default Artists;
