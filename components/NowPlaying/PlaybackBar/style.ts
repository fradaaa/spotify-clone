import styled from "@emotion/styled";
import { FlexRow } from "../../Globals";

export const PlaybackBarContainer = styled(FlexRow)`
  height: 100%;
  width: 40%;
`;

export const PlaybackProgressTime = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
`;

export const PlaybackProgressBarWrapper = styled(FlexRow)`
  flex: 1;
  height: 5px;
  margin: 5px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: var(--brsm);
`;

export const PlaybackDuration = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
`;
