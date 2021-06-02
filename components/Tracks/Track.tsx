import Image from "next/image";
import Link from "next/link";
import { useShow } from "../../Hooks";
import {
  TrackAlbum,
  TrackAlbumContainer,
  TrackArtistName,
  TrackContainer,
  TrackCoverContainer,
  TrackDate,
  TrackDateContainer,
  TrackPlayCount,
  TrackPlayCountContainer,
  TrackTitle,
  TrackTitleContainer,
} from "./style";
import TrackExtra from "./TrackExtra";
import TrackPlayButton from "./TrackPlayButton";
import { ITrackProps } from "./types";
import { convertArtists, convertPlayCount, formatAddedAt } from "./utils";

const DisplayTrack = ({
  id,
  trackNumber,
  title,
  artists,
  album,
  dateAdded,
  duration,
  playCount,
  config: { showArtists, showImage, showPlayCount, showPlay },
  meta: { highlight, isSaved, index },
}: ITrackProps) => {
  const { show, disableShow, enableShow } = useShow();

  return (
    <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      {showPlay && (
        <TrackPlayButton
          highlight={highlight}
          show={show}
          trackNumber={trackNumber}
          index={index}
        />
      )}
      <TrackTitleContainer>
        {showImage && (
          <TrackCoverContainer>
            <Image src={album.image} alt="" width={40} height={40} />
          </TrackCoverContainer>
        )}
        <div>
          <TrackTitle highlight={highlight}>{title}</TrackTitle>
          {showArtists && convertArtists(artists, TrackArtistName)}
        </div>
      </TrackTitleContainer>
      {showPlayCount && playCount ? (
        <TrackPlayCountContainer>
          <TrackPlayCount>{convertPlayCount(playCount)}</TrackPlayCount>
        </TrackPlayCountContainer>
      ) : (
        <TrackAlbumContainer>
          <Link href={`/album/${album.id}`}>
            <TrackAlbum>{album.name}</TrackAlbum>
          </Link>
        </TrackAlbumContainer>
      )}
      {dateAdded && (
        <TrackDateContainer>
          <TrackDate>{formatAddedAt(dateAdded)}</TrackDate>
        </TrackDateContainer>
      )}
      <TrackExtra trackId={id} isSaved={isSaved} duration={duration} />
    </TrackContainer>
  );
};

export default DisplayTrack;
