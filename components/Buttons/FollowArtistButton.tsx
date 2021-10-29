import { useUser } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { useShow } from "../../Hooks";
import { LoginModal, Modal } from "../Modals";
import { Button } from "./style";

type FollowArtistProps = {
  artistId: string;
  isFollowed: boolean;
};

const updateFollow = async (artistId: string, method: "PUT" | "DELETE") => {
  await fetch("/api/me/following", {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      artistId,
    }),
  });
};

const FollowArtistButton = ({ artistId, isFollowed }: FollowArtistProps) => {
  const { user } = useUser();
  const { show, enableShow, disableShow } = useShow();
  const [followed, setFollowed] = useState(isFollowed);
  const [disabled, setDisabled] = useState(false);
  const { mutate } = useSWRConfig();
  const url = `/api/me/following/contains?ids=${artistId}`;

  const handleClick = async () => {
    if (!user) {
      enableShow();
      return;
    }

    setDisabled(true);

    try {
      if (followed) {
        setFollowed(false);
        mutate(url, [false], false);
        await updateFollow(artistId, "DELETE");
      } else {
        setFollowed(true);
        mutate(url, [true], false);
        await updateFollow(artistId, "PUT");
      }
      mutate(url);
    } catch (error) {
      console.error(error);
      setFollowed(isFollowed);
      mutate(url);
    }

    setDisabled(false);
  };

  return (
    <>
      <Button style={{ margin: 0 }} disabled={disabled} onClick={handleClick}>
        {followed ? "UNFOLLOW" : "FOLLOW"}
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
