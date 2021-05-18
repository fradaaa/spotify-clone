import { useAudioData, useNowPlaying } from "../../../Hooks";
import { convertSeconds } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const CurrentTime = () => {
  const { currentTime } = useAudioData();

  return <PlaybackTime>{convertSeconds(currentTime)}</PlaybackTime>;
};

const PlaybackBar = () => {
  const { duration } = useNowPlaying();

  return (
    <PlaybackBarContainer>
      <CurrentTime />
      <PlaybackProgressBar duration={duration} />
      <PlaybackTime>{convertSeconds(duration)}</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
