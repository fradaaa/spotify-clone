import styled from "@emotion/styled";
import { IconButton } from "../../Buttons/style";
import { FlexRow } from "../../Globals";

export const ExtraControlContainer = styled(FlexRow)`
  width: 25%;
  height: 100%;
`;

export const QueueButton = styled(IconButton)``;

export const VolumeBarContainer = styled(FlexRow)`
  flex: 1;
  padding-right: 10px;
`;

export const VolumeBarButton = styled(IconButton)``;

export const VolumeBarWrapper = styled(FlexRow)`
  flex: 1;
  height: 5px;
  margin: 5px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: var(--brsm);
`;
