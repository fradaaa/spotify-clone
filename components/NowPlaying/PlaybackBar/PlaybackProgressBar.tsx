import { useRef, useState } from "react";
import { useSlider } from "../../../Hooks";
import { ProgressBackground, ProgressButton, ProgressDuration } from "../style";
import { PlaybackProgressBarWrapper } from "./style";

type PlaybackProps = {
  currentTimePercent: number;
  seekTo: (to: number) => void;
};

const PlaybackProgressBar = ({ currentTimePercent, seekTo }: PlaybackProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
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
          style={{ transform: `translateX(-${100 - currentTimePercent}%)` }}
          show={show}
        />
        <ProgressButton
          style={{ left: `${currentTimePercent}%` }}
          aria-label=""
          show={show}
        />
      </ProgressBackground>
    </PlaybackProgressBarWrapper>
  );
};

export default PlaybackProgressBar;
