import styled from "@emotion/styled";
import { FlexRow } from "../../Globals";

export const PlaybackBarContainer = styled(FlexRow)`
  height: 100%;
  width: 40%;
  padding: 0 10px;
`;

export const PlaybackTime = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  font-size: 12px;
  padding: 5px;
  margin: 0 10px;
  user-select: none;
`;

export const PlaybackProgressBarWrapper = styled(FlexRow)`
  position: relative;
  flex: 1;
  height: 12px;
`;
