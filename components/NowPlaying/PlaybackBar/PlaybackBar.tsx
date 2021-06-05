import { useAppSelectior } from "../../../redux/hooks";
import { convertTrackDuration } from "../../Tracks/utils";
import PlaybackProgressBar from "./PlaybackProgressBar";
import { PlaybackBarContainer, PlaybackTime } from "./style";

const CurrentTime = () => {
  const currentTime = useAppSelectior((state) => state.nowPlaying.currentTime);

  return <PlaybackTime>{convertTrackDuration(currentTime)}</PlaybackTime>;
};

const PlaybackBar = ({ show }: { show?: boolean }) => {
  const duration = useAppSelectior(
    (state) => state.nowPlaying.currentTrack?.duration
  );

  return (
    <PlaybackBarContainer show={!!show}>
      <CurrentTime />
      <PlaybackProgressBar duration={duration || 0} />
      <PlaybackTime>{convertTrackDuration(duration || 0)}</PlaybackTime>
    </PlaybackBarContainer>
  );
};

export default PlaybackBar;
