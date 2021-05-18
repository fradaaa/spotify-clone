import {
  TrackArtistName,
  TrackButton,
  TrackContainer,
  TrackDuration,
  TrackNumber,
  TrackTitle,
  TrackTitleContainer,
} from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Artist } from ".prisma/client";
import { convertArtists, convertSeconds } from "./utils";
import Link from "next/link";
import { useState } from "react";
import { useAudio } from "../../Hooks";

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
  const { playPause } = useAudio();
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseLeave = () => setShow(false);

  const playPauseTrack = () =>
    playPause({ track_url, title, artists, duration, image, id });

  return (
    <TrackContainer
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <TrackNumber>
        {show ? (
          <TrackButton
            aria-label="Play"
            width="20"
            height="20"
            onClick={playPauseTrack}
          >
            {true ? <BsPlayFill /> : <BsPauseFill />}
          </TrackButton>
        ) : (
          trackNumber
        )}
      </TrackNumber>
      <TrackTitleContainer>
        <TrackTitle>{title}</TrackTitle>
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
