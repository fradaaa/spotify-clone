import { usePlaylist } from "../../Hooks";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { PlaylistColumns } from "../Tracks/TrackRows";
import VirtualTracksList from "../Tracks/VirtualTracksList";
import { PlaylistTracksContainer } from "./style";

const PlaylistTracks = () => {
  const { id, total } = usePlaylist();
  const url = `/api/playlists/${id}/tracks`;

  return (
    <TrackConfigProvider showDate>
      <PlaylistColumns />
      <PlaylistTracksContainer>
        <VirtualTracksList url={url} total={total} />
      </PlaylistTracksContainer>
    </TrackConfigProvider>
  );
};

export default PlaylistTracks;
