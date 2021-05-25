import { Album, Artist } from ".prisma/client";

export interface ITrackProps {
  id: string;
  nowId: string;
  trackNumber: number;
  duration: number;
  is_saved: boolean;
  handleClick: () => void;
  pauseTrack: () => void;
}

export interface ITrackPlayButtonProps {
  id: string;
  nowId: string;
  show: boolean;
  trackNumber: number;
  handleClick: () => void;
  pauseTrack: () => void;
}

export interface IAlbumTrackProps {
  id: string;
  track_number: number;
  image: string;
  title: string;
  artists: Artist[];
  duration: number;
  track_url: string;
  is_saved: boolean;
}

export interface IPlaylistTrackProps extends IAlbumTrackProps {
  album: Album;
  added_at: string;
}

export interface IPlaylistSearchTrackProps {
  id: string;
  image: string;
  title: string;
  artists: Artist[];
  duration: number;
  track_url: string;
  album: Album;
  playlistId: string;
}

export interface IAristTrackProps extends IAlbumTrackProps {
  play_count: number;
}
