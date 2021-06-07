import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import TopNav from "../Nav/TopNav";
import NowPlaying from "../NowPlaying/NowPlaying";
import { LayoutContainer } from "./style";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
