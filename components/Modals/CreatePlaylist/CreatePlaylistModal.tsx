import { CreatePlaylistContainer } from "../style";
import CreatePlaylistForm from "./CreatePlaylistForm";
import CreatePlaylistHeader from "./CreatePlaylistHeader";

const CreatePlaylistModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <CreatePlaylistContainer>
      <CreatePlaylistHeader closeModal={closeModal} />
      <CreatePlaylistForm closeModal={closeModal} />
    </CreatePlaylistContainer>
  );
};

export default CreatePlaylistModal;
