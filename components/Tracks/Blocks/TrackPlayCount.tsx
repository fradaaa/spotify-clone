import React from "react";
import { useTrack } from "../../../Hooks";
import { convertPlayCount } from "../utils";
import { TrackPlayCountContainer, TrackPlayCountText } from "./style";

const TrackPlayCount = () => {
  const { play_count } = useTrack();

  return (
    <TrackPlayCountContainer>
      <TrackPlayCountText>{convertPlayCount(play_count)}</TrackPlayCountText>
    </TrackPlayCountContainer>
  );
};

export default TrackPlayCount;
