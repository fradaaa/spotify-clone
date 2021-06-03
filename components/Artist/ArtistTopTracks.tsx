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
          <TracksPage url={`/api/artists/${id}/top-tracks`} altIndex />
        </ArtistTopTracksContainer>
        <ArtistLikedSongs />
      </ArtistTrackWrapper>
    </TrackConfigContext.Provider>
  );
};

export default ArtistTopTracks;
