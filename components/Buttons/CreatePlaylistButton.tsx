import { AddPlaylistText, Button, PlaylistIcon } from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useShow } from "../../Hooks";
import { CreatePlaylistModal, Modal } from "../Modals";

const CreatePlaylistButton = () => {
  const { show, enableShow, disableShow } = useShow();

  return (
    <>
      <Button onClick={enableShow} type="button">
        <PlaylistIcon>
          <AiOutlinePlusCircle />
        </PlaylistIcon>
        <AddPlaylistText>Create Playlist</AddPlaylistText>
      </Button>
      {show && (
        <Modal
          contentLabel="Create playlist modal"
          isOpen={show}
          onRequestClose={disableShow}
        >
          <CreatePlaylistModal
            closeModal={disableShow}
            buttonText="Create"
            method="POST"
          />
        </Modal>
      )}
    </>
  );
};

export default CreatePlaylistButton;
