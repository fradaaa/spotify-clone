import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { AiFillGithub, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { Button } from "../Buttons/style";
import Dropdown from "../Dropdown/Dropdown";
import { StyledLink } from "../Globals";
import { libraryItems, menuItems } from "./items";
import {
  NavItemIcon,
  TopNavContainer,
  TopNavDropdown,
  TopNavItem,
  TopNavLink,
  TopNavLogo,
  TopNavText,
} from "./style";

const TopNav = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <TopNavContainer as="nav">
      <TopNavLogo>
        <img src="/logo.png" alt="logo" />
      </TopNavLogo>
      {user ? null : (
        <Button onClick={handleLogin}>
          <AiOutlineLogin />
        </Button>
      )}
      <StyledLink
        href="https://github.com/fradaaa"
        target="_blank"
        rel="noreferrer"
        style={{ display: "flex", marginLeft: "auto" }}
      >
        <NavItemIcon>
          <AiFillGithub />
        </NavItemIcon>
      </StyledLink>
      <Dropdown icon={<AiOutlineMenu />}>
        <TopNavDropdown>
          {menuItems.concat(libraryItems).map(({ Icon, link, text }, i) => {
            return user || i < 3 ? (
              <TopNavItem key={i}>
                <Link href={link}>
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
              <Link href="/collection/playlists">
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
