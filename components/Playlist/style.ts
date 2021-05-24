import styled from "@emotion/styled";
import { IconButton } from "../Buttons/style";
import { FlexRow, StyledInput } from "../Globals";

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

export const InputContainer = styled(FlexRow)`
  position: relative;
  width: 50%;
`;

export const AddTracksSearchInput = styled(StyledInput)`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.surface2};
`;

export const SearchIcon = styled.label`
  position: absolute;
  left: 5px;
  color: ${({ theme }) => theme.primary};

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const ClearSearchIcon = styled(IconButton)`
  position: absolute;
  right: 5px;
`;

export const AddTracksSearchResults = styled.div`
  padding: 30px 0;
  color: ${({ theme }) => theme.onSurface};
  height: 600px;
`;

export const PlaylistTracksContainer = styled.div`
  padding: 20px 10px;
`;

export const EmptyResults = styled.div`
  text-align: center;
`;

export const EmptyResultsTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const EmptyResultsPar = styled.p``;