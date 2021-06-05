import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexRow } from "../../Globals";
import { ControlsButton } from "../Controls/style";

export const StateControlsContainer = styled(FlexRow)`
  display: none;

  ${mq["lg"]} {
    display: flex;
  }
`;

type ControlsButtonProps = {
  highlight: boolean;
};

export const StyledControlsButton = styled(ControlsButton)<ControlsButtonProps>`
  margin-left: 10px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
`;
