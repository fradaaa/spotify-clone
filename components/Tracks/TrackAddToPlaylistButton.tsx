import { useContext } from "react";
import { useSWRConfig } from "swr";
import { MutateContext } from "../../Context";
import { usePlaylist, useTrack } from "../../Hooks";
import { Button } from "../Buttons/style";

const TrackAddToPlaylistButton = () => {
  const { id: playlistId } = usePlaylist();
  const { id: trackId } = useTrack();
  const { mutate } = useSWRConfig();
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
