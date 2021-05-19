import { Artist } from ".prisma/client";

export interface ITrackProps {
  id: string;
  nowId: string;
  trackNumber: number;
  duration: number;
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
}

export interface IAristTrackProps extends IAlbumTrackProps {
  play_count: number;
}
