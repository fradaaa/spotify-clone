import { usePlaylist } from "../../Hooks";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import TracksList from "../TracksList/TracksList";

const PlaylistTracks = () => {
  const { id, total } = usePlaylist();
  const url = `/api/playlists/${id}/tracks`;

  return (
    <TrackConfigProvider showDate>
      <TracksList url={url} total={total} />
    </TrackConfigProvider>
  );
};

export default PlaylistTracks;
