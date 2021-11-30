import { Album, Artist, Track } from ".prisma/client";

type TopTrack = Track & {
  album: Album;
  artists: Artist[];
};

export type ArtistProps = {
  artist: Artist;
  albums: Album[];
  topTracks: TopTrack[];
};
