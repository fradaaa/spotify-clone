import { Artist } from ".prisma/client";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useAudioHelpers, useShow } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import {
  TrackButton,
  TrackContainer,
  TrackDuration,
  TrackNumber,
  TrackTitle,
  TrackTitleContainer,
} from "./style";
import { convertArtists, convertSeconds } from "./utils";

type AlbumTrackProps = {
  id: string;
  trackNumber: number;
  title: string;
  artists: Artist[];
  duration: number;
  track_url: string;
  image: string;
};

const AlbumTrack = ({
  id,
  trackNumber,
  title,
  artists,
  duration,
  track_url,
  image,
}: AlbumTrackProps) => {
  const { show, disableShow, enableShow } = useShow();
  const { playTrack, pauseTrack } = useAudioHelpers();
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const { id: nowId } = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );

  const handleClick = () => {
    playTrack({ id, image, title, duration, artists, track_url });
  };

  return (
    <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      <TrackNumber>
        {show ? (
          <TrackButton
            aria-label="Play"
            width="20"
            height="20"
            onClick={isPlaying ? pauseTrack : handleClick}
          >
            {id === nowId && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </TrackButton>
        ) : (
          trackNumber
        )}
      </TrackNumber>
      <TrackTitleContainer>
        <TrackTitle highlight={id === nowId}>{title}</TrackTitle>
        {convertArtists(artists)}
      </TrackTitleContainer>
      <TrackButton aria-label="Remove from your library" width="15" height="15">
        <AiOutlineHeart />
      </TrackButton>
      <TrackDuration>{convertSeconds(duration)}</TrackDuration>
    </TrackContainer>
  );
};

export default AlbumTrack;
