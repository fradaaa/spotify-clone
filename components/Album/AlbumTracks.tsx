import { useMemo } from "react";
import { TrackConfigContext } from "../../Context";
import { TrackConfigContextType } from "../../Context/TrackConfigContext";
import { useAlbum } from "../../Hooks";
import { AlbumColumns } from "../Tracks/TrackColumnNames";
import TracksPage from "../Tracks/TracksPage";
import AlbumControls from "./AlbumControls";
import { AlbumTracksContainer } from "./style";

const AlbumTracks = () => {
  const { id } = useAlbum();

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
        <TracksPage url={`/api/albums/${id}/tracks`} />
      </AlbumTracksContainer>
    </TrackConfigContext.Provider>
  );
};

export default AlbumTracks;
