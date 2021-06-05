import { Album, Artist, Track } from ".prisma/client";
import React from "react";

export interface ITrackProps {
  track: Track & { artists: Artist[]; album: Album };
  highlight: boolean;
  isSaved: boolean;
  index: number;
  altIndex?: number;
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
