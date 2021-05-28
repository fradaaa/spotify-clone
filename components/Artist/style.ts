import styled from "@emotion/styled";
import { FlexRow } from "../Globals";

export const StyledArtistHeader = styled.header`
  display: flex;
  position: relative;
  display: flex;
  padding: 0 20px 20px;
  height: 30vh;
  background-color: ${({ theme }) => theme.surface2};
`;

export const ArtistHeaderImage = styled.div`
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  inset: 0;
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

export const ArtistTopTracksContainer = styled.div`
  padding: 0 20px;
  max-width: 70%;
`;

export const ArtistSubHeaderText = styled.h2`
  padding: 0 20px;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.onSurface};
`;
