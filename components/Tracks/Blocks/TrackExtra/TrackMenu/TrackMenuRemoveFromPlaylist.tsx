import { mutate } from "swr";
import { useMatchMutate, usePlaylist, useTrack } from "../../../../../Hooks";
import { TrackMenuButton, TrackMenuOption, TrackMenuText } from "./style";

const TrackMenuRemoveFromPlaylist = () => {
  const { id: playlistId } = usePlaylist();
  const { id: trackId } = useTrack();
  const matchMutate = useMatchMutate();

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
      const mutateKey = new RegExp(`^/api/playlists/${playlistId}`, "gi");
      matchMutate(mutateKey);
      mutate(`/api/playlists/${playlistId}`);
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
