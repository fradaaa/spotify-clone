import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import logo from "../../../public/logo.png";
import { Button } from "../../Buttons/style";
import Dropdown from "../../Dropdown/Dropdown";
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
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <TopNavContainer as="nav">
      <TopNavLogo>
        <Image src={logo} alt="logo" />
      </TopNavLogo>
      {isLoading ? null : user ? null : (
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
          <AiFillGithub />
        </NavItemIcon>
      </TopNavGithubLink>
      <Dropdown icon={<AiOutlineMenu />}>
        <TopNavDropdown>
          {menuItems.concat(libraryItems).map(({ Icon, link, text }, i) => {
            return user || i < 3 ? (
              <TopNavItem key={i}>
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
            <TopNavItem>
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
      </Dropdown>
    </TopNavContainer>
  );
};

export default TopNav;
