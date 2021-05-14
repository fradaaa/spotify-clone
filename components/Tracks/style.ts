import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexCol, FlexRow, StyledLink } from "../Globals";

export const TrackContainer = styled(FlexRow)`
  color: ${({ theme }) => theme.onSurface};
  padding: 10px 0;
`;

export const TrackNumber = styled(FlexRow)`
  margin: 0 5px;
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
`;

export const TrackArtistName = styled(StyledLink)``;

export const TrackPlayCount = styled(FlexRow)`
  flex: 1;
  margin: 0 10px;
`;

export const TrackDuration = styled(FlexRow)`
  margin: 0 10px;
`;
