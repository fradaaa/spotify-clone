import React from "react";
import { usePlaylist, useTrack } from "../../../../../Hooks";
import { TrackMenuButton, TrackMenuOption, TrackMenuText } from "./style";

const TrackMenuRemoveFromPlaylist = () => {
  const { id: playlistId, total } = usePlaylist();
  const { id: trackId } = useTrack();

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
