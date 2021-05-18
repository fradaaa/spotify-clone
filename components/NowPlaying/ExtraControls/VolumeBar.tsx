import {
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { useAudioHelpers, useShow, useSlider } from "../../../Hooks";
import { useAppSelectior } from "../../../redux/hooks";
import ProgressBar from "../ProgressBar";
import { VolumeBarButton, VolumeBarContainer } from "./style";

const volumeIcon = (volume: number) => {
  if (volume === 0) {
    return <IoVolumeMuteOutline />;
  } else if (volume > 0 && volume <= 33) {
    return <IoVolumeLowOutline />;
  } else if (volume > 33 && volume <= 66) {
    return <IoVolumeMediumOutline />;
  } else {
    return <IoVolumeHighOutline />;
  }
};

const VolumeBar = () => {
  const volume = useAppSelectior((state) => state.nowPlaying.volume);
  const { show, disableShow, enableShow } = useShow();
  const { changeVolume } = useAudioHelpers();
  const { isDragging, handleMouseDown } = useSlider(changeVolume);

  return (
    <VolumeBarContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      <VolumeBarButton
        aria-label={volume === 0 ? "Unmute" : "Mute"}
        title={volume === 0 ? "Unmute" : "Mute"}
        width="25"
        height="25"
      >
        {volumeIcon(volume)}
      </VolumeBarButton>
      <ProgressBar
        value={volume}
        show={show}
        isDragging={isDragging}
        enableShow={enableShow}
        disableShow={disableShow}
        handleMouseDown={handleMouseDown}
      />
    </VolumeBarContainer>
  );
};

export default VolumeBar;
