import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { IconButton } from "../../Buttons/style";
import { FlexRow } from "../../Globals";

export const ControlsContainer = styled(FlexRow)`
  justify-content: center;
  width: 50%;
  height: 100%;
  justify-content: center;

  ${mq["md"]} {
    width: 10%;
  }
`;

export const ControlsButton = styled(IconButton)``;
