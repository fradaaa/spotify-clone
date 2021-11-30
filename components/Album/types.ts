import { Album, Artist, Track } from ".prisma/client";

export type AlbumProps = {
  album: Album & { artist: Artist; duration: number };
  albumTracks: (Track & {
    album: Album;
    artists: Artist[];
  })[];
  albumSuggestions: Album[];
};
