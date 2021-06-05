import { useContext } from "react";
import { mutate } from "swr";
import { MutateContext } from "../../Context";
import { usePlaylist, useTrack } from "../../Hooks";
import { Button } from "../Buttons/style";

const TrackAddToPlaylistButton = () => {
  const { id: playlistId, total } = usePlaylist();
  const { id: trackId } = useTrack();
  const mutateSearch = useContext(MutateContext);

  const handleClick = async () => {
    try {
      await fetch(`/api/playlists/${playlistId}/tracks`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId,
        }),
      });
      mutateSearch!(trackId);
      for (let i = 0; i + 1 * 50 < total; i++) {
        mutate(`/api/playlists/${playlistId}/tracks?offset=${i * 50}&take=50`);
      }
      mutate(`/api/playlists/${playlistId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      ADD
    </Button>
  );
};

export default TrackAddToPlaylistButton;
