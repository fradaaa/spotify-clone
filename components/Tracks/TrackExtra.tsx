import SaveTrackButton from "./SaveTrackButton";
import { TrackDuration, TrackExtraContainer } from "./style";
import { convertTrackDuration } from "./utils";

type TrackExtraProps = {
  trackId: string;
  isSaved: boolean;
  duration: number;
};

const TrackExtra = ({ trackId, isSaved, duration }: TrackExtraProps) => {
  return (
    <TrackExtraContainer>
      <SaveTrackButton trackId={trackId} isSaved={isSaved} />
      <TrackDuration>{convertTrackDuration(duration)}</TrackDuration>
    </TrackExtraContainer>
  );
};

export default TrackExtra;
