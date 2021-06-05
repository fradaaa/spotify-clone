import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Button } from "../../components/Buttons/style";
import { PlaylistsCollection } from "../../components/Collection";
import { RingLoader } from "../../components/Globals";
import { ButtonsContainer } from "../../components/Home/style";

const Artists = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  const handleLogout = () => {
    router.push("/api/auth/logout");
  };

  return (
    <>
      <Head>
        <title>Spotify Clone - Collection - Artists</title>
      </Head>
      {isLoading ? (
        <RingLoader />
      ) : user ? (
        <PlaylistsCollection />
      ) : (
        <ButtonsContainer>
          <Button onClick={handleLogin}>LOGIN</Button>
          <Button onClick={handleLogout}>LOG OUT</Button>
        </ButtonsContainer>
      )}
    </>
  );
};

export default Artists;
