import { Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { AlbumTrack } from "../Tracks";
import { AlbumTracksContainer } from "./style";

type AlbumTrack = Track & { artists: Artist[] };

const AlbumTracks = () => {
  const { id, image } = useAlbum();
  const { data, error } = useSWR<AlbumTrack[]>(`/api/albums/${id}/tracks`);
  const { data: saved } = useSWR(
    () => `/api/me/tracks/contains?ids=${data.map(({ id }) => id).join(",")}`
  );

  if (error) return <div>Failed to load</div>;

  if (!saved) return <div>Loading...</div>;

  return (
    <AlbumTracksContainer>
      {data.map(
        ({ track_number, title, artists, duration, id, track_url }, i) => (
          <AlbumTrack
            key={id}
            id={id}
            track_number={track_number}
            title={title}
            artists={artists}
            duration={duration}
            track_url={track_url}
            image={image}
            is_saved={saved[i]}
          />
        )
      )}
    </AlbumTracksContainer>
  );
};

export default AlbumTracks;
