import PlaybackProgressBar from "./PlaybackProgressBar";
import {
  PlaybackBarContainer,
  PlaybackDuration,
  PlaybackProgressTime,
} from "./style";

const PlaybackBar = () => {
  return (
    <PlaybackBarContainer>
      <PlaybackProgressTime>1:05</PlaybackProgressTime>
      <PlaybackProgressBar />
      <PlaybackDuration>3:08</PlaybackDuration>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
