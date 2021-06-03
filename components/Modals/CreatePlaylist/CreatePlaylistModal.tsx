import { CreatePlaylistContainer } from "../style";
import CreatePlaylistForm from "./CreatePlaylistForm";
import CreatePlaylistHeader from "./CreatePlaylistHeader";

export type PlaylistModalProps = {
  closeModal: () => void;
  buttonText: string;
  method: "POST" | "PUT";
  playlistId?: string;
};

const CreatePlaylistModal = ({ closeModal, ...props }: PlaylistModalProps) => {
  return (
    <CreatePlaylistContainer>
      <CreatePlaylistHeader closeModal={closeModal} />
      <CreatePlaylistForm closeModal={closeModal} {...props} />
    </CreatePlaylistContainer>
  );
};

export default CreatePlaylistModal;
