import { useUser } from "@auth0/nextjs-auth0";
import { useArtist } from "../../Hooks";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import TracksPage from "../Tracks/TracksPage";
import ArtistLikedSongs from "./ArtistLikedInfo";
import {
  ArtistSubHeaderText,
  ArtistTopTracksContainer,
  ArtistTrackWrapper,
} from "./style";

const ArtistTopTracks = () => {
  const { id } = useArtist();
  const { user } = useUser();

  return (
    <TrackConfigProvider showPlayCount>
      <ArtistTrackWrapper>
        <ArtistTopTracksContainer>
          <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
          <div style={{ minHeight: "550px" }}>
            <TracksPage url={`/api/artists/${id}/top-tracks`} altIndex />
          </div>
        </ArtistTopTracksContainer>
        {user && <ArtistLikedSongs />}
      </ArtistTrackWrapper>
    </TrackConfigProvider>
  );
};

export default ArtistTopTracks;
