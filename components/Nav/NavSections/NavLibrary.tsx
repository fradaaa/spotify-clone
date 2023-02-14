import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { libraryItems } from "../items";
import { NavItem, NavItemIcon, NavItemLink, NavItemText } from "../style";
import { NavSectionContainer, NavSectionName } from "./style";

const NavLibrary = () => {
  const user = useUser();
  const router = useRouter();

  return (
    <NavSectionContainer>
      <NavSectionName>Your Library</NavSectionName>
      {libraryItems.map(({ Icon, link, text }, i) => {
        return user || i === 0 ? (
          <NavItem highlight={router.asPath === link} key={i}>
            <Link href={link} passHref>
              <NavItemLink>
                <NavItemIcon>{Icon}</NavItemIcon>
                <NavItemText>{text}</NavItemText>
              </NavItemLink>
            </Link>
          </NavItem>
        ) : null;
      })}
    </NavSectionContainer>
  );
};

export default NavLibrary;
