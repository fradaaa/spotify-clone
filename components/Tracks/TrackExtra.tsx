import SaveTrackButton from "./SaveTrackButton";
import { TrackDuration, TrackExtraContainer } from "./style";
import { convertTrackDuration } from "./utils";

type TrackExtraProps = {
  trackId: string;
  isSaved: boolean;
  duration: number;
  index: number;
};

const TrackExtra = ({ trackId, isSaved, duration, index }: TrackExtraProps) => {
  return (
    <TrackExtraContainer>
      <SaveTrackButton trackId={trackId} isSaved={isSaved} index={index} />
      <TrackDuration>{convertTrackDuration(duration)}</TrackDuration>
    </TrackExtraContainer>
  );
};

export default TrackExtra;
