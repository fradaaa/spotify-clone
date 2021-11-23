import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { useAppSelectior } from "../../redux/hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import { Preview, PreviewItem } from "../Preview";
import DisplayTrack from "../Tracks/Track";

export const ConvertSearchTracks = ({
  tracks,
}: {
  tracks: (Track & { artists: Artist[]; album: Album })[];
}) => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return tracks
        ? `/api/me/tracks/contains?ids=${tracks.map(({ id }) => id).join(",")}`
        : null;
    },
    { revalidateOnFocus: false }
  );

  return (
    <>
      {tracks.length > 0 && <ArtistSubHeaderText>Tracks</ArtistSubHeaderText>}
      {saved &&
        tracks.map((track, i) => (
          <DisplayTrack
            key={track.id}
            track={track}
            highlight={track.id === nowId}
            isSaved={saved[i]}
            index={i}
            altIndex={i + 1}
          />
        ))}
    </>
  );
};

export const convertSeachArtists = (artists: Artist[]) => {
  return artists.length > 0 ? (
    <Preview title="Artists">
      {artists.map(({ id, image, name }) => (
        <PreviewItem
          key={id}
          id={id}
          image={image}
          title={name}
          subText="Artist"
          type="artist"
          round
          search
        />
      ))}
    </Preview>
  ) : null;
};

export const convertSearchAlbums = (albums: (Album & { artist: Artist })[]) => {
  return albums.length > 0 ? (
    <Preview title="ALbums">
      {albums.map(({ id, image, name, artist: { name: artistName } }) => (
        <PreviewItem
          key={id}
          id={id}
          image={image}
          title={name}
          subText={artistName}
          type="album"
          search
        />
      ))}
    </Preview>
  ) : null;
};

export const isEmpty = (data: { [key: string]: unknown[] }) => {
  const r: boolean[] = [];

  for (const key of Object.keys(data)) {
    r.push(data[key].length === 0);
  }

  return r.every((v) => v === true);
};
