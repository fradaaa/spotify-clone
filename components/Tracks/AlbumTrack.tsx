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
import { Artist } from ".prisma/client";
import { convertDuration } from "./utils";
import Link from "next/link";

type AlbumTrackProps = {
  trackNumber: number;
  title: string;
  artists: Artist[];
  duration: number;
};

const AlbumTrack = ({
  trackNumber,
  title,
  artists,
  duration,
}: AlbumTrackProps) => {
  return (
    <TrackContainer>
      <TrackNumber>{trackNumber}</TrackNumber>
      <TrackTitleContainer>
        <TrackTitle>{title}</TrackTitle>
        <div>
          {artists.map(({ id, name }, i) => (
            <Link href={`/artist/${id}`}>
              <TrackArtistName>
                {name}
                {i !== artists.length - 1 && ", "}
              </TrackArtistName>
            </Link>
          ))}
        </div>
      </TrackTitleContainer>
      <TrackButton aria-label="Remove from your library" width="15" height="15">
        <AiFillHeart />
      </TrackButton>
      <TrackDuration>{convertDuration(duration)}</TrackDuration>
    </TrackContainer>
  );
};

export default AlbumTrack;
