/* import { withPageAuthRequired } from "@auth0/nextjs-auth0"; */
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import LikedSongs from "../../components/LikedSongs/LikedSongs";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

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
