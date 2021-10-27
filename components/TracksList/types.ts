import { Album, Artist, Track } from ".prisma/client";

export type Data = Track & {
  artists: Artist[];
  album: Album;
  added_at: Date;
};

export type TrackData = Data & { isSaved: boolean };

export type SortString = "title" | "album" | "added" | "artist";
