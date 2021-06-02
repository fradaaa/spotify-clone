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
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        trackId,
      }),
    });
  };

  return (
    <Button type="button" onClick={handleClick}>
      ADD
    </Button>
  );
};

export default AddToPlaylistButton;
