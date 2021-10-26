import { useSWRConfig } from "swr";
import { usePlaylist, useTrack, useTrackHelpers } from "../../../../../Hooks";
import { TrackMenuButton, TrackMenuOption, TrackMenuText } from "./style";

const TrackMenuRemoveFromPlaylist = () => {
  const { id: playlistId } = usePlaylist();
  const {
    id: trackId,
    meta: { index },
  } = useTrack();
  const { deleteRow } = useTrackHelpers();
  const { mutate } = useSWRConfig();

  const handleClick = async () => {
    try {
      await fetch(`/api/playlists/${playlistId}/tracks`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId,
        }),
      });
      mutate(`/api/playlists/${playlistId}`);
      deleteRow(index);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TrackMenuOption>
      <TrackMenuButton onClick={handleClick}>
        <TrackMenuText>Remove from this playlist</TrackMenuText>
      </TrackMenuButton>
    </TrackMenuOption>
  );
};

export default TrackMenuRemoveFromPlaylist;
