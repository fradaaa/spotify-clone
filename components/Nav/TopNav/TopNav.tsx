import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { BiRightArrow } from "react-icons/bi";
import { useShow } from "../../../Hooks";
import logo from "../../../public/logo.png";
import { Button } from "../../Buttons/style";
import { libraryItems, menuItems } from "../items";
import { NavItemIcon } from "../style";
import {
  TopNavContainer,
  TopNavDropdown,
  TopNavGithubLink,
  TopNavItem,
  TopNavLink,
  TopNavLogo,
  TopNavText,
} from "./style";

const TopNav = () => {
  const user = useUser();
  const { show, enableShow, disableShow } = useShow();
  const router = useRouter();

  const handleShow = () => {
    if (show) {
      disableShow();
      return;
    }

    enableShow();
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <TopNavContainer as="nav">
      <TopNavLogo>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </TopNavLogo>
      {user ? null : user ? null : (
        <Button aria-label="Login" onClick={handleLogin}>
          <AiOutlineLogin />
        </Button>
      )}
      <TopNavGithubLink
        href="https://github.com/fradaaa"
        target="_blank"
        rel="noreferrer"
        aria-label="fradaaa github page"
      >
        <NavItemIcon>
          <VscGithub />
        </NavItemIcon>
      </TopNavGithubLink>
      <Button aria-label="Login" onClick={handleShow}>
        <AiOutlineMenu />
      </Button>
      {show && (
        <TopNavDropdown>
          {menuItems.concat(libraryItems).map(({ Icon, link, text }, i) => {
            return user || i < 3 ? (
              <TopNavItem key={i} onClick={disableShow}>
                <Link href={link} passHref>
                  <TopNavLink>
                    <NavItemIcon>{Icon}</NavItemIcon>
                    <TopNavText>{text}</TopNavText>
                  </TopNavLink>
                </Link>
              </TopNavItem>
            ) : null;
          })}
          {user && (
            <TopNavItem onClick={disableShow}>
              <Link href="/collection/playlists" passHref>
                <TopNavLink>
                  <NavItemIcon>
                    <BiRightArrow />
                  </NavItemIcon>
                  <TopNavText>Playlists</TopNavText>
                </TopNavLink>
              </Link>
            </TopNavItem>
          )}
        </TopNavDropdown>
      )}
    </TopNavContainer>
  );
};

export default TopNav;
