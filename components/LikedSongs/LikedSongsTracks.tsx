import { Track, Artist, Album } from "@prisma/client";
import useSWR from "swr";
import { PlaylistTrack } from "../Tracks";
import { LikedSongsTracksContainer } from "./style";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const LikedSongsTracks = () => {
  const { data } = useSWR<{ items: Data[]; total: number }>("/api/me/tracks");
  const { data: saved } = useSWR(
    () =>
      `/api/me/tracks/contains?ids=${data.items.map(({ id }) => id).join(",")}`
  );

  return (
    <LikedSongsTracksContainer>
      {saved &&
        data.items.map(
          ({ id, title, artists, duration, track_url, album, added_at }, i) => (
            <PlaylistTrack
              key={id}
              id={id}
              track_number={i + 1}
              title={title}
              image={album.image}
              artists={artists}
              duration={duration}
              track_url={track_url}
              added_at={new Date(added_at).toISOString()}
              album={album}
              is_saved={saved[i]}
            />
          )
        )}
    </LikedSongsTracksContainer>
  );
};

export default LikedSongsTracks;
