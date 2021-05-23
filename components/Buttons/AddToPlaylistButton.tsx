import { mutate } from "swr";
import { Button } from "./style";

const AddToPlaylistButton = ({
  trackId,
  playlistId,
}: {
  trackId: string;
  playlistId: string;
}) => {
  const handleClick = async () => {
    await fetch(`/api/playlists/${playlistId}/tracks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        trackId,
      }),
    });
    mutate(`/api/playlists/${playlistId}/tracks`);
  };

  return (
    <Button type="button" onClick={handleClick}>
      ADD
    </Button>
  );
};

export default AddToPlaylistButton;
