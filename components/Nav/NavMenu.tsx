import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { StyledLink } from "../Globals";
import { menuItems } from "./items";
import {
  NavMenuContainer,
  NavItem,
  NavItemIcon,
  NavItemText,
  NavItemLink,
} from "./style";

const NavMenu = () => {
  const router = useRouter();

  return (
    <NavMenuContainer>
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
    </NavMenuContainer>
  );
};

export default NavMenu;
