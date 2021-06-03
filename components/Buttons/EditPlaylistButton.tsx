import { RoundIconButton } from "./style";
import { BsPencil } from "react-icons/bs";
import { usePlaylist, useShow } from "../../Hooks";
import { CreatePlaylistModal, Modal } from "../Modals";

const EditPlaylistButton = () => {
  const { show, enableShow, disableShow } = useShow();
  const { id } = usePlaylist();

  return (
    <RoundIconButton
      onClick={enableShow}
      type="button"
      aria-label=""
      width="30"
      height="30"
    >
      <BsPencil />
      {show && (
        <Modal
          contentLabel="Create playlist modal"
          isOpen={show}
          onRequestClose={disableShow}
        >
          <CreatePlaylistModal
            closeModal={disableShow}
            buttonText="Update"
            method="PUT"
            playlistId={id}
          />
        </Modal>
      )}
    </RoundIconButton>
  );
};

export default EditPlaylistButton;
