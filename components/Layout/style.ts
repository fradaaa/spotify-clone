import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "nav main"
    "now-playing now-playing";
  grid-template-columns: auto 5fr;
  grid-template-rows: 7fr 1fr;
  height: 100vh;
`;
