import { MainContainer, StyledMain } from "./style";

const Main = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <StyledMain>
      <MainContainer>{children}</MainContainer>
    </StyledMain>
  );
};

export default Main;
