import { useAppSelectior } from "../../../redux/hooks";
import { convertTrackDuration } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const CurrentTime = () => {
  const currentTime = useAppSelectior((state) => state.nowPlaying.currentTime);

  return <PlaybackTime>{convertTrackDuration(currentTime)}</PlaybackTime>;
};

const PlaybackBar = () => {
  const duration = useAppSelectior(
    (state) => state.nowPlaying.currentTrack.duration
  );

  return (
    <PlaybackBarContainer>
      <CurrentTime />
      <PlaybackProgressBar duration={duration} />
      <PlaybackTime>{convertTrackDuration(duration)}</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
