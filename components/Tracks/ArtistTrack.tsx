import Image from "next/image";
import {
  TrackButton,
  TrackContainer,
  TrackCoverContainer,
  TrackDuration,
  TrackNumber,
  TrackPlayCount,
  TrackTitle,
} from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { convertSeconds } from "./utils";

type ArtistTrackProps = {
  trackNumber: number;
  image: string;
  title: string;
  playCount: number;
  duration: number;
};

const ArtistTrack = ({
  trackNumber,
  image,
  title,
  playCount,
  duration,
}: ArtistTrackProps) => {
  return (
    <TrackContainer>
      <TrackNumber>{trackNumber}</TrackNumber>
      <TrackCoverContainer>
        <Image src={image} alt="" width={40} height={40} />
      </TrackCoverContainer>
      <TrackTitle>{title}</TrackTitle>
      <TrackPlayCount>{playCount}</TrackPlayCount>
      <TrackButton aria-label="Remove from your library" width="15" height="15">
        <AiFillHeart />
      </TrackButton>
      <TrackDuration>{convertSeconds(duration)}</TrackDuration>
    </TrackContainer>
  );
};

export default ArtistTrack;
