import { useRef, useState } from "react";
import { useAudio, useNowPlaying, useSlider } from "../../../Hooks";
import { ProgressBackground, ProgressButton, ProgressDuration } from "../style";
import { PlaybackProgressBarWrapper } from "./style";

const timeToPercent = (time: number, total: number) => {
  return (time / total) * 100;
};

const PlaybackProgressBar = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { seekTo, currentTime } = useAudio();
  const { duration } = useNowPlaying();
  const { handleMouseDown, handleClick } = useSlider({
    updateFunction: seekTo,
    targetElement: wrapperRef.current,
  });
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseLeave = () => setShow(false);

  return (
    <PlaybackProgressBarWrapper
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      ref={wrapperRef}
    >
      <ProgressBackground>
        <ProgressDuration
          style={{
            transform: `translateX(-${
              100 - timeToPercent(currentTime, duration)
            }%)`,
          }}
          show={show}
        />
        <ProgressButton
          style={{ left: `${timeToPercent(currentTime, duration)}%` }}
          aria-label=""
          show={show}
        />
      </ProgressBackground>
    </PlaybackProgressBarWrapper>
  );
};

export default PlaybackProgressBar;
