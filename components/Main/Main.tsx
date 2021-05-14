import { StyledMain, MainContainer } from "./style";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMain>
      <MainContainer>{children}</MainContainer>
    </StyledMain>
  );
};

export default Main;
