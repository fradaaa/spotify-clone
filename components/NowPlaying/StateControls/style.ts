import styled from "@emotion/styled";
import { FlexRow } from "../../Globals";
import { ControlsButton } from "../Controls/style";

export const StateControlsContainer = styled(FlexRow)``;

type ControlsButtonProps = {
  highlight: boolean;
};

export const StyledControlsButton = styled(ControlsButton)<ControlsButtonProps>`
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
`;
