import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { ArtistTrack } from "../Tracks";
import { ArtistTopTracksContainer, ArtistSubHeaderText } from "./style";

type TopTrack = Track & { album: Album; artists: Artist[] };

const ArtistTopTracks = () => {
  const { id } = useArtist();
  const { data, error } = useSWR<TopTrack[]>(`/api/artists/${id}/top-tracks`);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <ArtistTopTracksContainer>
      <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
      {data.map(
        (
          {
            id,
            title,
            play_count,
            duration,
            album: { image },
            artists,
            track_url,
          },
          i
        ) => (
          <ArtistTrack
            key={id}
            id={id}
            track_number={i + 1}
            image={image}
            title={title}
            play_count={play_count}
            duration={duration}
            artists={artists}
            track_url={track_url}
          />
        )
      )}
    </ArtistTopTracksContainer>
  );
};

export default ArtistTopTracks;
