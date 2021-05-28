import { useState } from "react";
import { mutate } from "swr";
import { Button } from "./style";

type FollowArtistProps = {
  artistId: string;
  isFollowed: boolean;
};

const unfollowArtist = async (artistId: string) => {
  await fetch("/api/me/following", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      artistId,
    }),
  });

  return [false];
};

const followArtist = async (artistId: string) => {
  await fetch("/api/me/following", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      artistId,
    }),
  });

  return [true];
};

const FollowArtistButton = ({ artistId, isFollowed }: FollowArtistProps) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);

    try {
      if (isFollowed) {
        mutate(`/api/me/following/contains?ids=${artistId}`, [false], false);
      } else {
        mutate(`/api/me/following/contains?ids=${artistId}`, [true], false);
      }
      mutate(
        `/api/me/following/contains?ids=${artistId}`,
        isFollowed
          ? () => unfollowArtist(artistId)
          : () => followArtist(artistId)
      );
    } catch (error) {
      console.error(error);
    }

    setDisabled(false);
  };

  return (
    <Button disabled={disabled} onClick={handleClick}>
      {isFollowed ? "UNFOLLOW" : "FOLLOW"}
    </Button>
  );
};

export default FollowArtistButton;
