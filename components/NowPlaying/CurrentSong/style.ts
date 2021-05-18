import styled from "@emotion/styled";
import { FlexCol, FlexRow, StyledLink } from "../../Globals";

export const CurrentSongContainer = styled(FlexRow)`
  height: 100%;
  width: 25%;
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
  font-size: 15px;
  font-weight: 600;
`;

export const CurrentSongArtistName = styled(StyledLink)`
  color: ${({ theme }) => theme.onSurface};
  font-size: 12px;
`;
