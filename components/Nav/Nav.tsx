import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import { AiOutlineLogin } from "react-icons/ai";
import { CreatePlaylistButton } from "../Buttons";
import { Button } from "../Buttons/style";
import NavLibrary from "./NavLibrary";
import NavMenu from "./NavMenu";
import NavPlaylists from "./NavPlaylists";
import {
  NavAltLogo,
  NavContainer,
  NavItemIcon,
  NavItemText,
  NavLogo,
  StyledNav,
} from "./style";

const Nav = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <>
      <StyledNav>
        <NavContainer>
          <NavLogo>
            <img src="/logo.png" alt="logo" />
          </NavLogo>
          <NavAltLogo>
            <img src="/icon.png" alt="logo" />
          </NavAltLogo>
          <NavMenu />
          <NavLibrary />
          {user && <NavPlaylists />}
          {isLoading ? null : user ? (
            <CreatePlaylistButton />
          ) : (
            <Button style={{ marginTop: "auto" }} onClick={handleLogin}>
              <NavItemIcon>
                <AiOutlineLogin />
              </NavItemIcon>
              <NavItemText>LOGIN</NavItemText>
            </Button>
          )}
        </NavContainer>
      </StyledNav>
      <div id="playlist"></div>
    </>
  );
};

export default Nav;
