import { useTrack } from "../../../../Hooks";
import SaveTrackButton from "./SaveTrackButton";
import { convertTrackDuration } from "../../utils";
import { TrackDurationText, TrackExtraContainer } from "./style";
import TrackMenu from "./TrackMenu";

const TrackExtra = () => {
  const {
    id,
    duration,
    meta: { isSaved },
  } = useTrack();

  return (
    <TrackExtraContainer>
      <SaveTrackButton trackId={id} isSaved={isSaved} />
      <TrackDurationText>{convertTrackDuration(duration)}</TrackDurationText>
      <TrackMenu />
    </TrackExtraContainer>
  );
};

export default TrackExtra;
