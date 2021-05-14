import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "nav main"
    "now-playing now-playing";
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5fr 1fr;
  height: 100vh;
`;
