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
}: IPlaylistSearchTrackProps) => {
  const { show, disableShow, enableShow } = useShow();
  const { playTrack, pauseTrack } = useAudioHelpers();
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack.id);

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
              onClick={id === nowId && isPlaying ? pauseTrack : handleClick}
            >
              {id === nowId && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </TrackButton>
          )}
        </TrackCoverButton>
        <Image src={image} alt="" width={40} height={40} />
      </TrackCoverContainer>
      <TrackTitleContainer>
        <TrackTitle highlight={id === nowId}>{title}</TrackTitle>
        {convertArtists(artists, TrackArtistName)}
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
