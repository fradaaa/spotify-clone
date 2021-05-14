import { Album, Track } from ".prisma/client";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { ArtistTrack } from "../Tracks";
import { ArtistTopTracksContainer, ArtistSubHeaderText } from "./style";

type TopTrack = Track & { album: Album };

const ArtistTopTracks = () => {
  const { id } = useArtist();
  const { data, error } = useSWR<TopTrack[]>(`/api/artists/${id}/top-tracks`);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <ArtistTopTracksContainer>
      <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
      {data.map(({ id, title, play_count, duration, album: { image } }, i) => (
        <ArtistTrack
          key={id}
          trackNumber={i + 1}
          image={image}
          title={title}
          playCount={play_count}
          duration={duration}
        />
      ))}
    </ArtistTopTracksContainer>
  );
};

export default ArtistTopTracks;
