import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "top-nav"
    "main"
    "now-playing";
  grid-template-columns: minmax(250px, 1fr);
  grid-template-rows: 1fr 7fr 1fr;
  height: 100vh;

  ${mq["sm"]} {
    grid-template-areas:
      "nav main"
      "now-playing now-playing";
    grid-template-columns: auto 5fr;
    grid-template-rows: 7fr 1fr;
  }
`;
