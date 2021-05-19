import { useCallback } from "react";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { TrackPlayCount, TrackTitle, TrackTitleContainer } from "./style";
import Track from "./Track";
import { IAristTrackProps } from "./types";

const ArtistTrack = ({
  id,
  track_number,
  image,
  title,
  play_count,
  duration,
  artists,
  track_url,
}: IAristTrackProps) => {
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
      </TrackTitleContainer>
      <TrackPlayCount>{play_count}</TrackPlayCount>
    </Track>
  );
};

export default ArtistTrack;
