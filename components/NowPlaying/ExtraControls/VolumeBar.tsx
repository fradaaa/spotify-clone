import {
  IoVolumeHighOutline,
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
  IoVolumeMute,
} from "react-icons/io5";
import { useAudioHelpers, useShow, useSlider } from "../../../Hooks";
import { useAppSelectior } from "../../../redux/hooks";
import ProgressBar from "../ProgressBar";
import { VolumeBarButton, VolumeBarContainer } from "./style";

const volumeIcon = (volume: number, isMuted: boolean) => {
  if (isMuted) {
    return <IoVolumeMute />;
  }

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
  const isMuted = useAppSelectior((state) => state.nowPlaying.isMuted);
  const { show, disableShow, enableShow } = useShow();
  const { changeVolume, toggleMute } = useAudioHelpers();
  const { isDragging, handleMouseDown } = useSlider(changeVolume);
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      changeVolume(volume - 10);
    } else {
      changeVolume(volume + 10);
    }
  };

  return (
    <VolumeBarContainer
      onMouseOver={enableShow}
      onMouseLeave={disableShow}
      onWheel={handleWheel}
    >
      <VolumeBarButton
        aria-label={isMuted ? "Unmute" : "Mute"}
        title={isMuted ? "Unmute" : "Mute"}
        width="25"
        height="25"
        onClick={toggleMute}
      >
        {volumeIcon(volume, isMuted)}
      </VolumeBarButton>
      <ProgressBar
        value={isMuted ? 0 : volume}
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
