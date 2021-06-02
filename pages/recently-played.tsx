import Head from "next/head";
import RecentlyPlayed from "../components/Queue/RecentlyPlayed";

const QueuePage = () => {
  return (
    <>
      <Head>
        <title>Spotify Clone - Recently Played</title>
      </Head>
      <RecentlyPlayed />
    </>
  );
};

export default QueuePage;
