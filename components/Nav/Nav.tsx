import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { AiFillGithub, AiOutlineLogin } from "react-icons/ai";
import { CreatePlaylistButton } from "../Buttons";
import { Button } from "../Buttons/style";
import { StyledLink } from "../Globals";
import { libraryItems, menuItems } from "./items";
import NavPlaylists from "./NavPlaylists";
import {
  NavAltLogo,
  NavContainer,
  NavItem,
  NavItemIcon,
  NavItemLink,
  NavItemText,
  NavLibrary,
  NavLogo,
  NavMenu,
  NavSectionName,
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
          <NavMenu>
            <NavItem highlight={false}>
              <StyledLink
                href="https://github.com/fradaaa"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                <NavItemIcon>
                  <AiFillGithub />
                </NavItemIcon>
                <NavItemText>Github</NavItemText>
              </StyledLink>
            </NavItem>
            {menuItems.map(({ Icon, link, text }, i) => (
              <NavItem highlight={router.asPath === link} key={i}>
                <Link href={link}>
                  <NavItemLink>
                    <NavItemIcon>{Icon}</NavItemIcon>
                    <NavItemText>{text}</NavItemText>
                  </NavItemLink>
                </Link>
              </NavItem>
            ))}
          </NavMenu>
          <NavLibrary>
            <NavSectionName>Your Library</NavSectionName>
            {libraryItems.map(({ Icon, link, text }, i) => (
              <NavItem highlight={router.asPath === link} key={i}>
                <Link href={link}>
                  <NavItemLink>
                    <NavItemIcon>{Icon}</NavItemIcon>
                    <NavItemText>{text}</NavItemText>
                  </NavItemLink>
                </Link>
              </NavItem>
            ))}
          </NavLibrary>
          <NavPlaylists />
          {isLoading ? null : user ? (
            <CreatePlaylistButton />
          ) : (
            <Button onClick={handleLogin}>
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
