import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const TrackContainer = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  padding: 5px 0;
  border-radius: var(--brsm);
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`;

export const TrackNumber = styled(FlexRow)`
  justify-content: center;
  padding: 0 5px;
  width: 50px;
`;

export const TrackButton = styled(IconButton)`
  padding: 5px;
`;

export const TrackCoverContainer = styled(FlexRow)`
  margin: 0 10px;
  border-radius: var(--brsm);
  overflow: hidden;
  position: relative;
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

export const TrackTitleContainer = styled(FlexCol)`
  flex: 2;
  padding: 10px;
`;

type TrackTitleProps = {
  highlight: boolean;
};

export const TrackTitle = styled(FlexRow)<TrackTitleProps>`
  flex: 2;
  font-weight: 600;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primary : theme.onSurface};
`;

export const TrackArtistName = styled(StyledLink)``;

export const TrackAlbumContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 15px;
  flex: 2;
`;

export const TrackAlbum = styled(StyledLink)``;

export const TrackDateContainer = styled.div``;

export const TrackDate = styled.div``;

export const TrackPlayCount = styled(FlexRow)`
  flex: 1;
  margin: 0 10px;
`;

export const TrackDuration = styled(FlexRow)`
  margin: 0 10px;
`;
