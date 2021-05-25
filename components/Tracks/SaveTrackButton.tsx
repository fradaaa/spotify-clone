import { TrackButton } from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

type SaveTrackProps = {
  trackId: string;
  isSaved: boolean;
};

const SaveTrackButton = ({ trackId, isSaved }: SaveTrackProps) => {
  const [saved, setSaved] = useState(isSaved);
  const [disabled, setDisabled] = useState(false);

  const handleCLick = async () => {
    setDisabled(true);
    if (saved) {
      await fetch("/api/me/tracks", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId,
        }),
      });
      setSaved(false);
    } else {
      await fetch("/api/me/tracks", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          trackId,
        }),
      });
      setSaved(true);
    }
    setDisabled(false);
  };

  return (
    <TrackButton
      disabled={disabled}
      onClick={handleCLick}
      aria-label=""
      width="25"
      height="25"
    >
      {saved ? <AiFillHeart /> : <AiOutlineHeart />}
    </TrackButton>
  );
};

export default SaveTrackButton;
