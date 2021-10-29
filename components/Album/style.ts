import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";
import { IconButton } from "../Buttons/style";

export const AlbumTracksContainer = styled.div`
  padding: 0 5px;

  ${mq["md"]} {
    padding: 0 20px;
  }
`;

export const AlbumButton = styled(IconButton)``;
