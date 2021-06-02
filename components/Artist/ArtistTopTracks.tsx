import { useArtist } from "../../Hooks";
import TracksPage from "../Tracks/TracksPage";
import ArtistLikedSongs from "./ArtistLikedInfo";
import {
  ArtistSubHeaderText,
  ArtistTopTracksContainer,
  ArtistTrackWrapper,
} from "./style";

const ArtistTopTracks = () => {
  const { id } = useArtist();

  return (
    <ArtistTrackWrapper>
      <ArtistTopTracksContainer>
        <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
        <TracksPage
          url={`/api/artists/${id}/top-tracks`}
          artist
          config={{
            showImage: true,
            showPlayCount: true,
            showPlay: true,
          }}
        />
      </ArtistTopTracksContainer>
      <ArtistLikedSongs />
    </ArtistTrackWrapper>
  );
};

export default ArtistTopTracks;
