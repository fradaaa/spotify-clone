import { useAlbum } from "../../Hooks";
import { AlbumColumns } from "../Tracks/TrackColumnNames";
import TracksPage from "../Tracks/TracksPage";
import AlbumControls from "./AlbumControls";
import { AlbumTracksContainer } from "./style";

const AlbumTracks = () => {
  const { id } = useAlbum();

  return (
    <>
      <AlbumControls />
      <AlbumTracksContainer>
        <AlbumColumns />
        <TracksPage
          url={`/api/albums/${id}/tracks`}
          config={{
            showArtists: true,
            showImage: true,
            showPlayCount: true,
            showPlay: true,
          }}
        />
      </AlbumTracksContainer>
    </>
  );
};

export default AlbumTracks;
