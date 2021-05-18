import {
  useAudioData,
  useAudioHelpers,
  useShow,
  useSlider,
} from "../../../Hooks";
import ProgressBar from "../ProgressBar";

const PlaybackProgressBar = ({ duration }: { duration: number }) => {
  const { currentTime } = useAudioData();
  const { changeCurrentTime } = useAudioHelpers();
  const { show, enableShow, disableShow } = useShow();
  const { isDragging, handleMouseDown } = useSlider(changeCurrentTime);

  return (
    <ProgressBar
      value={(currentTime / duration) * 100}
      show={show}
      isDragging={isDragging}
      enableShow={enableShow}
      disableShow={disableShow}
      handleMouseDown={handleMouseDown}
    />
  );
};

export default PlaybackProgressBar;
