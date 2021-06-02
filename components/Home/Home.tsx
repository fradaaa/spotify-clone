import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { Button } from "../Buttons/style";
import { RingLoader } from "../Globals";
import HomeContent from "./HomeContent";
import { ButtonsContainer, HomeContainer } from "./style";

const Home = () => {
  const router = useRouter();
  const [skip, setSkip] = useState(false);
  const { user, isLoading } = useUser();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  const handleLogout = () => {
    router.push("/api/auth/logout");
  };

  return (
    <HomeContainer>
      {isLoading ? (
        <RingLoader />
      ) : user || skip ? (
        <HomeContent />
      ) : (
        <ButtonsContainer>
          <Button onClick={handleLogin}>LOGIN</Button>
          <Button onClick={handleLogout}>LOG OUT</Button>
          <Button onClick={() => setSkip(true)}>SKIP</Button>
        </ButtonsContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
