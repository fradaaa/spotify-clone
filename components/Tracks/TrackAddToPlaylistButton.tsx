import { useContext } from "react";
import { MutateContext } from "../../Context";
import { useMatchMutate, usePlaylist, useTrack } from "../../Hooks";
import { Button } from "../Buttons/style";

const TrackAddToPlaylistButton = () => {
  const { id: playlistId } = usePlaylist();
  const { id: trackId } = useTrack();
  const matchMutate = useMatchMutate();
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
      const mutateKey = new RegExp(`^/api/playlists/${playlistId}`, "gi");
      matchMutate(mutateKey);
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
