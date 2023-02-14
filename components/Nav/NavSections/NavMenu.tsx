import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { Button } from "../../Buttons/style";
import { menuItems } from "../items";
import { NavItem, NavItemIcon, NavItemLink, NavItemText } from "../style";
import { NavSectionContainer } from "./style";

const NavMenu = () => {
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    } else {
      router.push("/");
    }
  };

  return (
    <NavSectionContainer>
      <NavItem highlight={false}>
        <NavItemLink
          href="https://github.com/fradaaa"
          target="_blank"
          rel="noreferrer"
        >
          <NavItemIcon>
            <VscGithub />
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
      {user && (
        <Button
          aria-label="Log out"
          type="button"
          style={{ margin: "10px 0 0 30px" }}
          onClick={handleLogOut}
        >
          Log out
        </Button>
      )}
    </NavSectionContainer>
  );
};

export default NavMenu;
