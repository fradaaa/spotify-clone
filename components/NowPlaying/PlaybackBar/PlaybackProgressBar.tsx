import { useAudioHelpers, useShow, useSlider } from "../../../Hooks";
import { useAppSelectior } from "../../../redux/hooks";
import ProgressBar from "../ProgressBar";

const PlaybackProgressBar = ({ duration }: { duration: number }) => {
  const currentTime = useAppSelectior((state) => state.nowPlaying.currentTime);
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
