import styled from "@emotion/styled";
import { IconButton } from "../../Buttons/style";
import { FlexRow, StyledLink } from "../../Globals";
import {
  TrackColumnAlbum,
  TrackColumnDate,
  TrackColumnNumber,
  TrackColumnPlayCount,
  TrackColumnTitle,
} from "../TrackColumnNames/style";

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
`;

type TrackTitleProps = {
  highlight: boolean;
};

export const TrackTitleText = styled(FlexRow)<TrackTitleProps>`
  flex: 2;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
`;

export const TrackArtistName = styled(StyledLink)`
  font-size: 14px;
`;

export const TrackPlayCountContainer = styled(TrackColumnPlayCount)``;

export const TrackPlayCountText = styled.div`
  font-size: 14px;
  width: 11ch;
  text-align: right;
`;

export const TrackAlbumContainer = styled(TrackColumnAlbum)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackAlbumText = styled(StyledLink)`
  font-size: 14px;
`;

export const TrackDateContainer = styled(TrackColumnDate)``;

export const TrackDateText = styled.span`
  font-size: 14px;
`;
