import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import {
  TrackAlbum,
  TrackAlbumContainer,
  TrackArtistName,
  TrackCoverContainer,
  TrackDate,
  TrackDateContainer,
  TrackTitle,
  TrackTitleContainer,
} from "./style";
import Track from "./Track";
import { IPlaylistTrackProps } from "./types";
import { convertArtists } from "./utils";

const PlaylistTrack = ({
  id,
  image,
  title,
  artists,
  duration,
  track_url,
  track_number,
  added_at,
  album,
  is_saved,
}: IPlaylistTrackProps) => {
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
      is_saved={is_saved}
      handleClick={handleClick}
      pauseTrack={pauseTrack}
    >
      <TrackCoverContainer>
        <Image src={image} alt="" width={40} height={40} />
      </TrackCoverContainer>
      <TrackTitleContainer>
        <TrackTitle highlight={id === nowId}>{title}</TrackTitle>
        {convertArtists(artists, TrackArtistName)}
      </TrackTitleContainer>
      <TrackAlbumContainer>
        <Link href={`/album/${album.id}`}>
          <TrackAlbum>{album.name}</TrackAlbum>
        </Link>
      </TrackAlbumContainer>
      <TrackDateContainer>
        <TrackDate>{new Date(added_at).toDateString()}</TrackDate>
      </TrackDateContainer>
    </Track>
  );
};

export default PlaylistTrack;
