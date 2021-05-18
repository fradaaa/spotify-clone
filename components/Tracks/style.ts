import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const TrackContainer = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  padding: 5px 0;
  border-radius: var(--brsm);
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.surface};
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
`;

export const TrackTitleContainer = styled(FlexCol)`
  flex: 2;
  padding: 10px;
`;

export const TrackTitle = styled(FlexRow)`
  flex: 2;
  font-weight: 600;
`;

export const TrackArtistName = styled(StyledLink)``;

export const TrackPlayCount = styled(FlexRow)`
  flex: 1;
  margin: 0 10px;
`;

export const TrackDuration = styled(FlexRow)`
  margin: 0 10px;
`;
