import styled from "@emotion/styled";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const AlbumContainer = styled(FlexCol)`
  flex: 1;
  height: 100%;
`;

export const StyledAlbumHeader = styled.header`
  display: flex;
  padding: 20px;
`;

export const AlbumHeaderCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
`;

export const AlbumHeaderInfoContainer = styled(FlexCol)`
  justify-content: flex-end;
  color: ${({ theme }) => theme.onSurface};
  padding: 10px;
`;

export const AlbumHeaderType = styled(FlexRow)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

export const AlbumHeaderTitle = styled(FlexRow)`
  font-size: 50px;
  font-weight: 600;
`;

export const AlbumHeaderInfo = styled(FlexRow)`
  font-size: 15px;
`;

export const AlbumHeaderArtistPhoto = styled(FlexRow)`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
`;

export const AlbumHeaderArtistName = styled(StyledLink)`
  font-weight: 600;
`;

export const AlbumHeaderInfoText = styled(FlexRow)``;

export const AlbumTracksContainer = styled(FlexCol)``;
