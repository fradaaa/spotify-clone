import { Album, Artist, Track } from "@prisma/client";
import useSWR from "swr";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "./Track";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

type TracksPageProps = {
  page?: number;
  url: string;
  artist?: boolean;
  config: {
    showImage?: boolean;
    showArtists?: boolean;
    showPlayCount?: boolean;
    showPlay?: boolean;
  };
};

const TracksPage = ({ page, url, artist, config }: TracksPageProps) => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data: tracks } = useSWR<{ items: Data[] }>(
    () => (page ? `${url}?offset=${10 * (page - 1)}&take=10` : url),
    { revalidateOnFocus: false }
  );
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return tracks
        ? `/api/me/tracks/contains?ids=${tracks.items
            .map(({ id }) => id)
            .join(",")}`
        : null;
    },
    { revalidateOnFocus: false }
  );

  return tracks && saved ? (
    <>
      {tracks.items.map(
        (
          {
            id,
            title,
            artists,
            duration,
            track_url,
            track_number,
            album,
            added_at,
            play_count,
          },
          i
        ) => (
          <DisplayTrack
            key={id}
            id={id}
            trackNumber={
              page ? (page - 1) * 10 + i + 1 : artist ? i + 1 : track_number
            }
            title={title}
            artists={artists}
            album={album}
            dateAdded={added_at}
            duration={duration}
            config={config}
            playCount={play_count}
            meta={{
              trackURL: track_url,
              highlight: id === nowId,
              isSaved: saved[i],
              index: i,
            }}
          />
        )
      )}
    </>
  ) : null;
};

export default TracksPage;
