import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { menuItems } from "../items";
import { NavItem, NavItemIcon, NavItemLink, NavItemText } from "../style";
import { NavSectionContainer } from "./style";

const NavMenu = () => {
  const router = useRouter();

  return (
    <NavSectionContainer>
      <NavItem highlight={false}>
        <NavItemLink
          href="https://github.com/fradaaa"
          target="_blank"
          rel="noreferrer"
        >
          <NavItemIcon>
            <AiFillGithub />
          </NavItemIcon>
          <NavItemText>Github</NavItemText>
        </NavItemLink>
      </NavItem>
      {menuItems.map(({ Icon, link, text }, i) => (
        <NavItem highlight={router.asPath === link} key={i}>
          <Link href={link} passHref>
            <NavItemLink>
              <NavItemIcon>{Icon}</NavItemIcon>
              <NavItemText>{text}</NavItemText>
            </NavItemLink>
          </Link>
        </NavItem>
      ))}
    </NavSectionContainer>
  );
};

export default NavMenu;
