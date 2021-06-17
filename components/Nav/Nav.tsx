import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { AiOutlineLogin } from "react-icons/ai";
import { CreatePlaylistButton } from "../Buttons";
import { NavMenu, NavLibrary, NavPlaylists } from "./NavSections";
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
          <Image src="/logo.png" width={210} height={65} alt="logo" />
        </NavLogo>
        <NavAltLogo>
          <Image src="/icon.png" width={50} height={50} alt="logo" />
        </NavAltLogo>
        <NavMenu />
        <NavLibrary />
        {user && <NavPlaylists />}
        {isLoading ? null : user ? (
          <CreatePlaylistButton />
        ) : (
          <NavLoginButton onClick={handleLogin}>
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
