import { useAppSelectior } from "../../../redux/hooks";
import { convertSeconds } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const CurrentTime = () => {
  const currentTime = useAppSelectior((state) => state.nowPlaying.currentTime);

  return <PlaybackTime>{convertSeconds(currentTime)}</PlaybackTime>;
};

const PlaybackBar = () => {
  const duration = useAppSelectior(
    (state) => state.nowPlaying.currentTrack.duration
  );

  return (
    <PlaybackBarContainer>
      <CurrentTime />
      <PlaybackProgressBar duration={duration} />
      <PlaybackTime>{convertSeconds(duration)}</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
