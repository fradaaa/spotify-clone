import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { usePlaylist } from "../../Hooks";
import { PlaylistTrack } from "../Tracks";
import { PlaylistTracksContainer } from "./style";

type Data = Track & { artists: Artist[]; album: Album };

const PlaylistTracks = () => {
  const { id } = usePlaylist();
  const { data } = useSWR<Data[]>(`/api/playlists/${id}/tracks`);

  return (
    <PlaylistTracksContainer>
      {data &&
        data.map(({ id, title, artists, duration, track_url, album }, i) => (
          <PlaylistTrack
            key={id}
            id={id}
            track_number={i + 1}
            title={title}
            image={album.image}
            artists={artists}
            duration={duration}
            track_url={track_url}
            added_at={new Date().toString()}
            album={album}
          />
        ))}
    </PlaylistTracksContainer>
  );
};

export default PlaylistTracks;
