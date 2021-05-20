import styled from "@emotion/styled";
import { IconButton } from "../../Buttons/style";
import { FlexRow } from "../../Globals";

export const ExtraControlsContainer = styled(FlexRow)`
  justify-content: flex-end;
  width: 25%;
  height: 100%;
`;

export const QueueButton = styled(IconButton)`
  margin-right: 10px;
`;

export const VolumeBarContainer = styled(FlexRow)`
  flex: 0 1 125px;
`;

export const VolumeBarButton = styled(IconButton)`
  margin-right: 10px;
`;

export const VolumeBarWrapper = styled(FlexRow)`
  position: relative;
  width: 100%;
  height: 12px;
`;
