import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { useAudioHelpers, useShow } from "../../Hooks";
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
  showImage,
  showArtists,
  meta: { trackURL, highlight, isSaved, index },
}: ITrackProps) => {
  const { show, disableShow, enableShow } = useShow();
  const { playTrack } = useAudioHelpers();

  const handleClick = useCallback(() => {
    playTrack({
      id,
      title,
      image: album.image,
      duration,
      artists,
      track_url: trackURL,
    });
  }, []);

  return (
    <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      <TrackPlayButton
        highlight={highlight}
        show={show}
        trackNumber={trackNumber}
        handleClick={handleClick}
      />
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
      {playCount ? (
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
      <TrackExtra
        trackId={id}
        isSaved={isSaved}
        duration={duration}
        index={index}
      />
    </TrackContainer>
  );
};

export default DisplayTrack;
