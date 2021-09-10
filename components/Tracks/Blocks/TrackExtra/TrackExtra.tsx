import { useTrack } from "../../../../Hooks";
import { convertTrackDuration } from "../../utils";
import SaveTrackButton from "./SaveTrackButton";
import { TrackDurationText, TrackExtraContainer } from "./style";
import TrackMenu from "./TrackMenu/TrackMenu";

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
