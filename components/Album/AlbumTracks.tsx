import { useAlbum } from "../../Hooks";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { AlbumColumns } from "../Tracks/TrackRows";
import TracksPage from "../Tracks/TracksPage";
import AlbumControls from "./AlbumControls";
import { AlbumTracksContainer } from "./style";

const AlbumTracks = () => {
  const { id, total_tracks } = useAlbum();

  return (
    <TrackConfigProvider showPlayCount>
      <AlbumControls />
      <AlbumTracksContainer>
        <AlbumColumns />
        <div style={{ minHeight: `${55 * total_tracks}px` }}>
          <TracksPage url={`/api/albums/${id}/tracks`} />
        </div>
      </AlbumTracksContainer>
    </TrackConfigProvider>
  );
};

export default AlbumTracks;
