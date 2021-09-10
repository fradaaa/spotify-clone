import { Playlist } from "@prisma/client";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import useSWR from "swr";
import { useShow, useTrack } from "../../../../../Hooks";
import {
  TrackMenuButton,
  TrackMenuOption,
  TrackMenuOptionList,
  TrackMenuOptionsListContainer,
  TrackMenuText,
} from "./style";

const TrackMenuAddToPlaylist = () => {
  const { show, disableShow, enableShow } = useShow();
  const { data } = useSWR<Playlist[]>(() => "/api/me/playlists");

  return (
    <TrackMenuOptionList onMouseOver={enableShow} onMouseLeave={disableShow}>
      <AiFillCaretLeft /> Add to playlist
      {show && data && (
        <TrackMenuOptionsListContainer>
          {data.map(({ id, name }) => (
            <AddTrack key={id} playlistId={id} name={name} />
          ))}
        </TrackMenuOptionsListContainer>
      )}
    </TrackMenuOptionList>
  );
};

const AddTrack = ({
  playlistId,
  name,
}: {
  playlistId: string;
  name: string;
}) => {
  const { id } = useTrack();
  const handleClick = async () => {
    try {
      await fetch(`/api/playlists/${playlistId}/tracks`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId: id,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TrackMenuOption>
      <TrackMenuButton onClick={handleClick}>
        <TrackMenuText>{name}</TrackMenuText>
      </TrackMenuButton>
    </TrackMenuOption>
  );
};

export default TrackMenuAddToPlaylist;
