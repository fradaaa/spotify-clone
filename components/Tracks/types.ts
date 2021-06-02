import { Album, Artist } from ".prisma/client";

export interface ITrackProps {
  id: string;
  trackNumber: number;
  title: string;
  artists: Artist[];
  album: Album;
  dateAdded?: Date;
  duration: number;
  playCount?: number;
  config: {
    showImage?: boolean;
    showArtists?: boolean;
    showPlayCount?: boolean;
    showPlay?: boolean;
  };
  meta: {
    trackURL: string;
    highlight: boolean;
    isSaved: boolean;
    index: number;
  };
}

export interface ITrackPlayButtonProps {
  highlight: boolean;
  show: boolean;
  trackNumber: number;
  index: number;
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
  highlight: boolean;
  track_number: number;
  play_count: number;
}
