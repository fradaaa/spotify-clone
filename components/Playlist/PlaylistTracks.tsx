import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { usePlaylist } from "../../Hooks";
import { PlaylistTrack } from "../Tracks";
import { PlaylistTracksContainer } from "./style";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const PlaylistTracks = () => {
  const { id } = usePlaylist();
  const { data } = useSWR<Data[]>(`/api/playlists/${id}/tracks`);
  const { data: saved } = useSWR(
    () => `/api/me/tracks/contains?ids=${data.map(({ id }) => id).join(",")}`
  );

  return (
    <PlaylistTracksContainer>
      {saved &&
        data.map(
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
    </PlaylistTracksContainer>
  );
};

export default PlaylistTracks;
