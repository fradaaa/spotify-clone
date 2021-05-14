import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const NowPlayingContainer = styled(FlexRow)`
  grid-area: now-playing;
  flex: 1;
  background-color: ${({ theme }) => theme.surface};
`;
