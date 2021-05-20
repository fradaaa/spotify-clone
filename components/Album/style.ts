import styled from "@emotion/styled";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const AlbumContainer = styled.div`
  flex: 1;
`;

export const StyledAlbumHeader = styled.header`
  display: flex;
  position: relative;
  height: 30vh;
  padding: 0 20px 20px;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeaderGradient = styled(HeaderBackground)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

export const AlbumHeaderCoverContainer = styled(FlexRow)`
  border-radius: var(--brsm);
  overflow: hidden;
  align-self: flex-end;
  min-width: 200px;
  margin-right: 25px;
  user-select: none;
`;

export const AlbumHeaderInfoContainer = styled(FlexCol)`
  justify-content: flex-end;
  color: ${({ theme }) => theme.onSurface};
  justify-content: flex-end;
  flex: 1;
  z-index: 1;
`;

export const AlbumHeaderType = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

export const AlbumHeaderTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
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

export const AlbumHeaderInfoText = styled.span`
  font-size: 14px;

  ::before {
    content: "•";
    font-size: 20px;
    margin: 0 3px;
  }
`;

export const AlbumTracksContainer = styled(FlexCol)`
  padding: 20px;
`;
