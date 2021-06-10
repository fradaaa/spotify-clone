import { useUser } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { mutate } from "swr";
import { useShow } from "../../Hooks";
import { LoginModal, Modal } from "../Modals";
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
  const { user } = useUser();
  const { show, enableShow, disableShow } = useShow();
  const [disabled, setDisabled] = useState(false);
  const url = `/api/me/following/contains?ids=${artistId}`;

  const handleClick = async () => {
    if (!user) {
      enableShow();
      return;
    }

    setDisabled(true);

    try {
      if (isFollowed) {
        mutate(url, [false], false);
      } else {
        mutate(url, [true], false);
      }
      mutate(
        url,
        isFollowed
          ? () => unfollowArtist(artistId)
          : () => followArtist(artistId)
      );
    } catch (error) {
      console.error(error);
      mutate(url);
    }

    setDisabled(false);
  };

  return (
    <>
      <Button disabled={disabled} onClick={handleClick}>
        {isFollowed ? "UNFOLLOW" : "FOLLOW"}
      </Button>
      {show && (
        <Modal
          contentLabel="Login modal"
          isOpen={show}
          onRequestClose={disableShow}
        >
          <LoginModal
            text="Follow an artist"
            subText="Login to follow artists"
            closeModal={disableShow}
          />
        </Modal>
      )}
    </>
  );
};

export default FollowArtistButton;
