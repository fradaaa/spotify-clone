import { useTrack } from "../../../Hooks";
import { formatAddedAt } from "../utils";
import { TrackDateContainer, TrackDateText } from "./style";

const TrackDate = () => {
  const { added_at } = useTrack();

  return (
    <TrackDateContainer>
      <TrackDateText>{formatAddedAt(added_at!)}</TrackDateText>
    </TrackDateContainer>
  );
};

export default TrackDate;
