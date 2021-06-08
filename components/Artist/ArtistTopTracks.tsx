import { useUser } from "@auth0/nextjs-auth0";
import { useMemo } from "react";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
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
  const { user } = useUser();

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: true,
      showPlay: true,
      showDate: false,
    }),
    []
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      <ArtistTrackWrapper>
        <ArtistTopTracksContainer>
          <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
          <div style={{ minHeight: "550px" }}>
            <TracksPage url={`/api/artists/${id}/top-tracks`} altIndex />
          </div>
        </ArtistTopTracksContainer>
        {user && <ArtistLikedSongs />}
      </ArtistTrackWrapper>
    </TrackConfigContext.Provider>
  );
};

export default ArtistTopTracks;
