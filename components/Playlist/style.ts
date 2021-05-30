import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexRow, StyledInput } from "../Globals";

export const AddTracksContainer = styled.div`
  padding: 0 20px;
`;

export const AddTracksText = styled.div`
  color: ${({ theme }) => theme.onSurface};
  font-weight: 600;
  font-size: 22px;
`;

export const AddTrackSearchContainer = styled.div`
  margin-top: 10px;
`;

export const InputContainer = styled(FlexRow)`
  width: 50%;
`;

export const AddTracksSearchResults = styled.div`
  padding: 30px 0;
  color: ${({ theme }) => theme.onSurface};
  height: 600px;
`;

export const PlaylistTracksContainer = styled.div`
  padding: 0 20px;
`;
