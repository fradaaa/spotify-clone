import { Album, Artist, Track } from "@prisma/client";
import useSWR from "swr";
import { useAppSelectior } from "../../redux/hooks";
import { RingLoader } from "../Globals";
import DisplayTrack from "./Track";

type TracksPageProps = {
  page?: number;
  url: string;
  altIndex?: boolean;
  revalidate?: boolean;
};

type Data = Track & {
  artists: Artist[];
  album: Album;
  added_at: Date;
};

const TAKE = 50;

const TracksPage = ({ page, url, altIndex, revalidate }: TracksPageProps) => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data: tracks } = useSWR<{ items: Data[] }>(
    () => (page ? `${url}?offset=${TAKE * (page - 1)}&take=${TAKE}` : url),
    { revalidateOnFocus: revalidate || false }
  );
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return tracks
        ? `/api/me/tracks/contains?ids=${tracks.items
            .map(({ id }) => id)
            .join(",")}`
        : null;
    },
    { revalidateOnFocus: revalidate || false }
  );

  return tracks && saved ? (
    <>
      {tracks.items.map((track, i) => (
        <DisplayTrack
          key={track.id}
          track={track}
          highlight={track.id === nowId}
          index={i}
          isSaved={saved[i]}
          altIndex={
            altIndex ? (page ? TAKE * (page - 1) + i + 1 : i + 1) : undefined
          }
        />
      ))}
    </>
  ) : (
    <RingLoader />
  );
};

export default TracksPage;
