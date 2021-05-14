import { VolumeBarButton, VolumeBarContainer, VolumeBarWrapper } from "./style";
import {
  IoVolumeHighOutline,
  IoVolumeMediumOutline,
  IoVolumeLowOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";

const VolumeBar = () => {
  return (
    <VolumeBarContainer>
      <VolumeBarButton aria-label="Mute" width="50" height="50">
        <IoVolumeHighOutline />
      </VolumeBarButton>
      <VolumeBarWrapper></VolumeBarWrapper>
    </VolumeBarContainer>
  );
};

export default VolumeBar;
