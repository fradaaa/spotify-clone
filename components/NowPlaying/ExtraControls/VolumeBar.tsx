import { VolumeBarButton, VolumeBarContainer, VolumeBarWrapper } from "./style";
import {
  IoVolumeHighOutline,
  IoVolumeMediumOutline,
  IoVolumeLowOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import { useRef, useState } from "react";
import { ProgressBackground, ProgressButton, ProgressDuration } from "../style";
import { useAudio, useSlider } from "../../../Hooks";

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { volume, changeVolume } = useAudio();
  const { handleMouseDown } = useSlider({
    updateFunction: changeVolume,
    targetElement: wrapperRef.current,
  });
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseLeave = () => setShow(false);

  return (
    <VolumeBarContainer
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <VolumeBarButton aria-label="Mute" width="25" height="25">
        {volumeIcon(volume)}
      </VolumeBarButton>
      <VolumeBarWrapper onMouseDown={handleMouseDown} ref={wrapperRef}>
        <ProgressBackground>
          <ProgressDuration
            style={{ transform: `translateX(-${100 - volume}%)` }}
            show={show}
          />
          <ProgressButton
            style={{ left: `${volume}%` }}
            aria-label="Change volume level"
            show={show}
          />
        </ProgressBackground>
      </VolumeBarWrapper>
    </VolumeBarContainer>
  );
};

export default VolumeBar;
