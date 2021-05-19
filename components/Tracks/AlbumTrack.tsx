import React, { useCallback } from "react";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { TrackArtistName, TrackTitle, TrackTitleContainer } from "./style";
import Track from "./Track";
import { IAlbumTrackProps } from "./types";
import { convertArtists } from "./utils";

const AlbumTrack = ({
  id,
  track_number,
  title,
  artists,
  duration,
  track_url,
  image,
}: IAlbumTrackProps) => {
  const { playTrack, pauseTrack } = useAudioHelpers();
  const { id: nowId } = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );

  const handleClick = useCallback(() => {
    playTrack({ id, image, title, duration, artists, track_url });
  }, []);

  return (
    <Track
      id={id}
      nowId={nowId}
      trackNumber={track_number}
      duration={duration}
      handleClick={handleClick}
      pauseTrack={pauseTrack}
    >
      <TrackTitleContainer>
        <TrackTitle highlight={id === nowId}>{title}</TrackTitle>
        {convertArtists(artists, TrackArtistName)}
      </TrackTitleContainer>
    </Track>
  );
};

export default AlbumTrack;
