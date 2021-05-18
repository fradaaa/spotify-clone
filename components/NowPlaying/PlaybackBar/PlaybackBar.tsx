import { useAudio, useNowPlaying } from "../../../Hooks";
import { convertSeconds } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const CurrentTime = () => {
  const { currentTime } = useAudio();

  return <PlaybackTime>{convertSeconds(currentTime)}</PlaybackTime>;
};

const PlaybackBar = () => {
  const { duration } = useNowPlaying();

  return (
    <PlaybackBarContainer>
      <CurrentTime />
      <PlaybackProgressBar />
      <PlaybackTime>{convertSeconds(duration)}</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
