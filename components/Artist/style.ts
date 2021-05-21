import styled from "@emotion/styled";
import { FlexCol, FlexRow } from "../Globals";

export const ArtistContainer = styled.div`
  flex: 1;
`;

export const StyledArtistHeader = styled.header`
  display: flex;
  padding: 0 20px 20px;
  height: 30vh;
  background-color: ${({ theme }) => theme.surface2};
`;

export const ArtistImageContainer = styled(FlexRow)`
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  align-self: flex-end;
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
