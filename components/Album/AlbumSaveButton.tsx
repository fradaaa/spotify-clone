import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { mutate } from "swr";
import { AlbumButton } from "./style";

type SaveAlbumButtonProps = {
  isSaved: boolean;
  albumId: string;
};

const removeAlbum = async (albumId: string) => {
  return await fetch("/api/me/albums", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      albumId,
    }),
  });
};

const saveAlbum = async (albumId: string) => {
  return await fetch("/api/me/albums", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      albumId,
    }),
  });
};

const SaveAlbumButton = ({ albumId, isSaved }: SaveAlbumButtonProps) => {
  const [disabled, setDisabled] = useState(false);

  const handleCLick = async () => {
    setDisabled(true);

    try {
      if (isSaved) {
        mutate(`/api/me/albums/contains?ids=${albumId}`, [false], false);
        await removeAlbum(albumId);
      } else {
        mutate(`/api/me/albums/contains?ids=${albumId}`, [true], false);
        await saveAlbum(albumId);
      }

      mutate(`/api/me/albums/contains?ids=${albumId}`);
    } catch (error) {
      console.error(error);
    }

    setDisabled(false);
  };

  return (
    <AlbumButton
      disabled={disabled}
      onClick={handleCLick}
      aria-label=""
      width="40"
      height="40"
    >
      {isSaved ? <AiFillHeart /> : <AiOutlineHeart />}
    </AlbumButton>
  );
};

export default SaveAlbumButton;
