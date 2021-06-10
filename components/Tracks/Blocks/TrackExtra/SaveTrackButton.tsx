import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useShow } from "../../../../Hooks";
import { LoginModal, Modal } from "../../../Modals";
import { TrackButton } from "../style";

type SaveTrackProps = {
  trackId: string;
  isSaved: boolean;
};

const removeTrack = async (trackId: string) => {
  await fetch("/api/me/tracks", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      trackId,
    }),
  });
};

const saveTrack = async (trackId: string) => {
  await fetch("/api/me/tracks", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      trackId,
    }),
  });
};

const SaveTrackButton = ({ trackId, isSaved }: SaveTrackProps) => {
  const { user } = useUser();
  const { show, enableShow, disableShow } = useShow();
  const [saved, setSaved] = useState(isSaved);
  const [disabled, setDisabled] = useState(false);

  const handleCLick = async () => {
    if (!user) {
      enableShow();
      return;
    }

    setDisabled(true);

    try {
      if (saved) {
        setSaved(false);
        await removeTrack(trackId);
      } else {
        setSaved(true);
        await saveTrack(trackId);
      }
    } catch (error) {
      console.error(error);
      setSaved(!saved);
    }

    setDisabled(false);
  };

  return (
    <>
      <TrackButton
        disabled={disabled}
        onClick={handleCLick}
        aria-label={saved ? "Remove from Your Library" : "Save to Your Library"}
        width="25"
        height="25"
      >
        {saved ? <AiFillHeart /> : <AiOutlineHeart />}
      </TrackButton>
      {show && (
        <Modal
          contentLabel="Login modal"
          isOpen={show}
          onRequestClose={disableShow}
        >
          <LoginModal
            text="Save a track"
            subText="Login to save tracks"
            closeModal={disableShow}
          />
        </Modal>
      )}
    </>
  );
};

export default SaveTrackButton;
