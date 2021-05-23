import styled from "@emotion/styled";
import { StyledInput } from "../Globals";

export const PlaylistContainer = styled.div`
  flex: 1;
`;

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

export const InputContainer = styled.div`
  width: 50%;
`;

export const AddTracksSearchInput = styled(StyledInput)`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.surface2};
`;

export const AddTracksSearchResults = styled.div`
  padding: 30px 0;
`;

export const PlaylistTracksContainer = styled.div`
  padding: 20px 10px;
`;
