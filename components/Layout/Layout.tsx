import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav/TopNav";
import NowPlaying from "../NowPlaying/NowPlaying";
import { LayoutContainer } from "./style";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <LayoutContainer>
      <TopNav />
      <Nav />
      <Main>{children}</Main>
      <NowPlaying />
    </LayoutContainer>
  );
};

export default Layout;
