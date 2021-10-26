import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";
import icon from "../../public/icon.png";
import logo from "../../public/logo.png";
import { CreatePlaylistButton } from "../Buttons";
import { NavLibrary, NavMenu, NavPlaylists } from "./NavSections";
import {
  NavAltLogo,
  NavContainer,
  NavItemIcon,
  NavItemText,
  NavLoginButton,
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
    <StyledNav>
      <NavContainer>
        <NavLogo>
          <Image src={logo} alt="logo" />
        </NavLogo>
        <NavAltLogo>
          <Image src={icon} alt="logo" />
        </NavAltLogo>
        <NavMenu />
        <NavLibrary />
        {user && <NavPlaylists />}
        {isLoading ? null : user ? (
          <CreatePlaylistButton />
        ) : (
          <NavLoginButton aria-label="Login" onClick={handleLogin}>
            <NavItemIcon>
              <AiOutlineLogin />
            </NavItemIcon>
            <NavItemText>LOGIN</NavItemText>
          </NavLoginButton>
        )}
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
