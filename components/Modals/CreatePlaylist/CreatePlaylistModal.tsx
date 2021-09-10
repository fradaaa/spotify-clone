import { CreatePlaylistContainer } from "../style";
import CreatePlaylistForm, { PlaylistForm } from "./CreatePlaylistForm";
import CreatePlaylistHeader from "./CreatePlaylistHeader";

type PlaylistModalProps = PlaylistForm & { headerText: string };

const CreatePlaylistModal = ({
  closeModal,
  headerText,
  ...props
}: PlaylistModalProps) => {
  return (
    <CreatePlaylistContainer>
      <CreatePlaylistHeader closeModal={closeModal} headerText={headerText} />
      <CreatePlaylistForm closeModal={closeModal} {...props} />
    </CreatePlaylistContainer>
  );
};

export default CreatePlaylistModal;
