import styled from "@emotion/styled";
import { mq } from "../../styles/breakpoints";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const StyledArtistHeader = styled.header`
  display: flex;
  position: relative;
  display: flex;
  padding: 0 20px 20px;
  height: 30vh;
  background-color: ${({ theme }) => theme.surface2};
  min-height: 350px;
`;

export const ArtistStats = styled.div`
  z-index: 1;
  color: ${({ theme }) => theme.onSurface};
  align-self: flex-end;
`;

export const ArtistName = styled.h1`
  font-size: 75px;
  font-weight: 600;
  margin: 0;
`;

export const ArtistListeners = styled.span`
  font-size: 15px;
`;

export const ArtistTrackWrapper = styled(FlexCol)`
  padding: 0 20px;
  align-items: flex-start;

  ${mq["xl"]} {
    flex-flow: row;
  }
`;

export const ArtistTopTracksContainer = styled.div`
  flex: 3;
  height: 100%;
  width: 100%;
`;

export const ArtistSubHeaderText = styled.h2`
  padding: 0 20px;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.onSurface};
`;

export const ArtistLikedContainer = styled.div`
  flex: 1;
  margin: 20px 0 0 20px;
  color: ${({ theme }) => theme.onSurface};

  ${mq["xl"]} {
    margin: 0 0 0 20px;
  }
`;

export const ArtistLikedSection = styled.div`
  margin-left: 20px;
`;

export const ArtistLikedImage = styled(FlexRow)`
  border-radius: 50%;
  overflow: hidden;
`;

export const ArtistLikedLink = styled(StyledLink)`
  font-weight: 600;
  font-size: 15px;
  display: block;
`;

export const ArtistLikedText = styled.span`
  font-size: 13px;
  display: block;
`;
