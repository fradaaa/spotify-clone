import { useMemo } from "react";
import { TrackConfigContext } from "../../Context";
import { TrackConfigContextType } from "../../Context/TrackConfigContext";
import { useAlbum } from "../../Hooks";
import { AlbumColumns } from "../Tracks/TrackRows";
import TracksPage from "../Tracks/TracksPage";
import AlbumControls from "./AlbumControls";
import { AlbumTracksContainer } from "./style";

const AlbumTracks = () => {
  const { id, total_tracks } = useAlbum();

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
      <AlbumControls />
      <AlbumTracksContainer>
        <AlbumColumns />
        <div style={{ minHeight: `${55 * total_tracks}px` }}>
          <TracksPage url={`/api/albums/${id}/tracks`} />
        </div>
      </AlbumTracksContainer>
    </TrackConfigContext.Provider>
  );
};

export default AlbumTracks;
