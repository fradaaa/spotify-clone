import Head from "next/head";
import Queue from "../components/Queue/Queue";

const QueuePage = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Queue</title>
      </Head>
      <Queue />
    </>
  );
};

export default QueuePage;
