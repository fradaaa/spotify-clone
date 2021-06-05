import styled from "@emotion/styled";
import { mq } from "../../../styles/breakpoints";
import { FlexRow } from "../../Globals";

type BarProps = {
  show: boolean;
};

export const PlaybackBarContainer = styled(FlexRow)<BarProps>`
  height: ${({ show }) => (show ? "auto" : "100%")};
  width: ${({ show }) => (show ? "100%" : "40%")};
  padding: 0 10px;
  display: ${({ show }) => (show ? "flex" : "none")};
  font-size: ${({ show }) => (show ? "20px" : "13px")};

  ${mq["md"]} {
    display: flex;
  }
`;

export const PlaybackTime = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  padding: 5px;
  margin: 0 10px;
  user-select: none;
  white-space: nowrap;
`;

export const PlaybackProgressBarWrapper = styled(FlexRow)`
  position: relative;
  flex: 1;
  height: 12px;
`;
