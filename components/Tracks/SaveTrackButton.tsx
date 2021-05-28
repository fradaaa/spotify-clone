import { TrackButton } from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { MutateContext } from "../../Context";

type SaveTrackProps = {
  trackId: string;
  isSaved: boolean;
  index: number;
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

  return false;
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

  return true;
};

const SaveTrackButton = ({ trackId, isSaved, index }: SaveTrackProps) => {
  const { localMutate, asyncMutate } = useContext(MutateContext)!;
  const [disabled, setDisabled] = useState(false);

  const handleCLick = async () => {
    setDisabled(true);

    if (isSaved) {
      localMutate(index, false);
      asyncMutate(index, async () => removeTrack(trackId));
    } else {
      localMutate(index, true);
      asyncMutate(index, async () => saveTrack(trackId));
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
      {isSaved ? <AiFillHeart /> : <AiOutlineHeart />}
    </TrackButton>
  );
};

export default SaveTrackButton;
