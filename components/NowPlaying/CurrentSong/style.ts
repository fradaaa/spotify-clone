import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../../Globals";

export const CurrentSongContainer = styled(FlexRow)`
  /* flex: 2; */
  justify-content: center;
  height: 100%;
  width: 20%;
`;

export const CurrentSongCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
`;

export const CurrentSongInfoContainer = styled(FlexCol)`
  margin-left: 10px;
`;

export const CurrentSongTitle = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  font-weight: 600;
`;

export const CurrentSongArtistName = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
`;
