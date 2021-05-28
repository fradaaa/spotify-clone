import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useAudioHelpers, useShow } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { AddToPlaylistButton } from "../Buttons";
import {
  TrackAlbum,
  TrackAlbumContainer,
  TrackArtistName,
  TrackButton,
  TrackContainer,
  TrackCoverButton,
  TrackCoverContainer,
  TrackTitle,
  TrackTitleContainer,
} from "./style";
import { IPlaylistSearchTrackProps } from "./types";
import { convertArtists } from "./utils";

const PlaylistSearchTrack = ({
  id,
  image,
  title,
  artists,
  duration,
  track_url,
  album: { id: albumId, name: albumName },
  playlistId,
  highlight,
}: IPlaylistSearchTrackProps) => {
  const { show, disableShow, enableShow } = useShow();
  const { playPause, playTrack } = useAudioHelpers();
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);

  const handleClick = useCallback(() => {
    playTrack({ id, image, title, duration, artists, track_url });
  }, []);

  return (
    <TrackContainer onMouseOver={enableShow} onMouseLeave={disableShow}>
      <TrackCoverContainer>
        <TrackCoverButton show={show}>
          {show && (
            <TrackButton
              aria-label={isPlaying ? "Pause" : "Play"}
              width="20"
              height="20"
              onClick={highlight ? playPause : handleClick}
            >
              {highlight && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </TrackButton>
          )}
        </TrackCoverButton>
        <Image src={image} alt="" width={40} height={40} />
      </TrackCoverContainer>
      <TrackTitleContainer>
        <div>
          <TrackTitle highlight={highlight}>{title}</TrackTitle>
          {convertArtists(artists, TrackArtistName)}
        </div>
      </TrackTitleContainer>
      <TrackAlbumContainer>
        <Link href={`/album/${albumId}`}>
          <TrackAlbum>{albumName}</TrackAlbum>
        </Link>
      </TrackAlbumContainer>
      <AddToPlaylistButton trackId={id} playlistId={playlistId} />
    </TrackContainer>
  );
};

export default PlaylistSearchTrack;
