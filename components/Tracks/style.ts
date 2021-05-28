import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexRow, StyledLink } from "../Globals";
import {
  TrackColumnNumber,
  TrackColumnTitle,
  TrackColumnAlbum,
  TrackColumnDate,
  TrackColumnPlayCount,
  TrackColumnExtra,
} from "./TrackColumnNames/style";

export const TrackContainer = styled(FlexRow)`
  height: 55px;
  color: ${({ theme }) => theme.onSurface};
  padding: 0 15px;
  border-radius: var(--brsm);
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

export const TrackNumber = styled(TrackColumnNumber)`
  font-size: 16px;
`;

type TrackCoverButtonProps = {
  show?: boolean;
};

export const TrackCoverButton = styled(FlexRow)<TrackCoverButtonProps>`
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${({ show }) => show && "rgba(0,0,0,0.5)"};
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

export const TrackTitle = styled(FlexRow)<TrackTitleProps>`
  flex: 2;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
`;

export const TrackArtistName = styled(StyledLink)`
  font-size: 14px;
`;

export const TrackAlbumContainer = styled(TrackColumnAlbum)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TrackAlbum = styled(StyledLink)`
  font-size: 14px;
`;

export const TrackDateContainer = styled(TrackColumnDate)``;

export const TrackDate = styled.span`
  font-size: 14px;
`;

export const TrackPlayCountContainer = styled(TrackColumnPlayCount)``;

export const TrackPlayCount = styled.div`
  font-size: 14px;
  width: 11ch;
  text-align: right;
`;

export const TrackDuration = styled(FlexRow)`
  margin: 0 10px;
  font-size: 14px;
`;

export const TrackExtraContainer = styled(TrackColumnExtra)``;
