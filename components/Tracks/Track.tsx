import { useMemo } from "react";
import TrackContext, { TrackContextType } from "../../Context/TrackContext";
import { useShow, useTrackConfig } from "../../Hooks";
import {
  TrackAlbum,
  TrackDate,
  TrackExtra,
  TrackPlayButton,
  TrackPlayCount,
  TrackTitle,
} from "./Blocks";
import { TrackContainer } from "./style";
import TrackAddToPlaylistButton from "./TrackAddToPlaylistButton";
import { ITrackProps } from "./types";

const DisplayTrack = ({
  track,
  highlight,
  index,
  isSaved,
  altIndex,
}: ITrackProps) => {
  const { show, disableShow, enableShow } = useShow();
  const { showPlayCount, showPlay, showDate, playlist } = useTrackConfig();

  const trackContextValue = useMemo<TrackContextType>(
    () => ({
      ...track,
      meta: { highlight, index, isSaved, altIndex },
    }),
    [track, highlight, index, isSaved, altIndex]
  );

  return (
    <TrackContext.Provider value={trackContextValue}>
      <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
        {showPlay && <TrackPlayButton show={show} />}
        <TrackTitle />
        {showPlayCount ? <TrackPlayCount /> : <TrackAlbum />}
        {showDate && <TrackDate />}
        {playlist ? <TrackAddToPlaylistButton /> : <TrackExtra />}
      </TrackContainer>
    </TrackContext.Provider>
  );
};

export default DisplayTrack;
