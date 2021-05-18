import { useAudio } from "../../../Hooks";
import { convertSeconds } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const PlaybackBar = () => {
  const { currentTime, seekTo } = useAudio();

  return (
    <PlaybackBarContainer>
      <PlaybackTime>{convertSeconds(currentTime)}</PlaybackTime>
      <PlaybackProgressBar currentTimePercent={50} seekTo={seekTo} />
      <PlaybackTime>3:08</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
