import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../Globals";

export const ArtistContainer = styled(FlexCol)`
  flex: 1;
  height: 100%;
`;

export const StyledArtistHeader = styled.header`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.surface};
`;

export const ArtistImageContainer = styled(FlexRow)`
  border-radius: 50%;
  overflow: hidden;
`;

export const ArtistNameContainer = styled(FlexRow)`
  flex: 1;
  justify-content: center;
`;

export const ArtistName = styled.h1`
  font-size: 90px;
  font-weight: 600;
  color: ${({ theme }) => theme.onSurface};
  margin: 0;
`;

export const ArtistTopTracksContainer = styled.div`
  padding: 20px;
`;

export const ArtistSubHeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.onSurface};
`;
