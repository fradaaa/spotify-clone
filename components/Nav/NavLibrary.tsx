import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { libraryItems } from "./items";
import {
  NavItem,
  NavItemIcon,
  NavItemLink,
  NavItemText,
  NavLibraryContainer,
  NavSectionName,
} from "./style";

const NavLibrary = () => {
  const router = useRouter();

  return (
    <NavLibraryContainer>
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
    </NavLibraryContainer>
  );
};

export default NavLibrary;
