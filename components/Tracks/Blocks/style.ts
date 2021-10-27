import styled from "@emotion/styled";
import { IconButton } from "../../Buttons/style";
import { FlexRow, StyledLink } from "../../Globals";
import {
  TrackColumnAlbum,
  TrackColumnDate,
  TrackColumnNumber,
  TrackColumnPlayCount,
  TrackColumnTitle,
} from "../TrackRows/style";

export const TrackNumber = styled(TrackColumnNumber)`
  font-size: 16px;
`;

export const TrackButton = styled(IconButton)`
  padding: 5px;
`;

export const TrackTitleContainer = styled(TrackColumnTitle)``;

export const TrackCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
  position: relative;
  margin-right: 15px;
  min-width: 40px;
`;

export const TrackTitleInfo = styled.div`
  overflow: hidden;
`;

type TrackTitleProps = {
  highlight: boolean;
};

export const TrackTitleText = styled.div<TrackTitleProps>`
  flex: 2;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackArtistName = styled(StyledLink)`
  font-size: 14px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackPlayCountContainer = styled(TrackColumnPlayCount)``;

export const TrackPlayCountText = styled.div`
  font-size: 14px;
  width: 13ch;
  text-align: right;
`;

export const TrackAlbumContainer = styled(TrackColumnAlbum)`
  overflow: hidden;
`;

export const TrackAlbumText = styled(StyledLink)`
  font-size: 14px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackDateContainer = styled(TrackColumnDate)``;

export const TrackDateText = styled.span`
  font-size: 14px;
`;
