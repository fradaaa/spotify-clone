import { usePlaylist, useTrack } from "../../Hooks";
import { Button } from "../Buttons/style";

const TrackAddToPlaylistButton = () => {
  const { id: playlistId } = usePlaylist();
  const { id: trackId } = useTrack();

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
