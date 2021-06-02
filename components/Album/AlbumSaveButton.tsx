import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useShow } from "../../Hooks";
import { LoginModal, Modal } from "../Modals";
import { AlbumButton } from "./style";

type AlbumSaveButtonProps = {
  isSaved: boolean;
  albumId: string;
};

const removeAlbum = async (albumId: string) => {
  await fetch("/api/me/albums", {
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
  await fetch("/api/me/albums", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      albumId,
    }),
  });
};

const AlbumSaveButton = ({ albumId, isSaved }: AlbumSaveButtonProps) => {
  const { user } = useUser();
  const { show, enableShow, disableShow } = useShow();
  const [disabled, setDisabled] = useState(false);
  const [saved, setSaved] = useState(isSaved);

  const handleCLick = async () => {
    if (!user) {
      enableShow();
      return;
    }

    setDisabled(true);

    try {
      if (saved) {
        setSaved(false);
        await removeAlbum(albumId);
      } else {
        setSaved(true);
        await saveAlbum(albumId);
      }
    } catch (error) {
      console.error(error);
      setSaved(!saved);
    }

    setDisabled(false);
  };

  return (
    <>
      <AlbumButton
        disabled={disabled}
        onClick={handleCLick}
        aria-label=""
        width="40"
        height="40"
      >
        {saved ? <AiFillHeart /> : <AiOutlineHeart />}
      </AlbumButton>
      {show && (
        <Modal
          contentLabel="Login modal"
          isOpen={show}
          onRequestClose={disableShow}
        >
          <LoginModal />
        </Modal>
      )}
    </>
  );
};

export default AlbumSaveButton;
