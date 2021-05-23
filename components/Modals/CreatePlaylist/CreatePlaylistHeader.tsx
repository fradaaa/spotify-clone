import {
  CreatePlaylistHeaderText,
  StyledCancelButton,
  StyledCreatePlaylistHeader,
} from "../style";
import { MdClear } from "react-icons/md";

const CreatePlaylistHeader = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <StyledCreatePlaylistHeader>
      <CreatePlaylistHeaderText>Create Playlist</CreatePlaylistHeaderText>
      <StyledCancelButton
        width="20"
        height="20"
        aria-label="Close modal"
        onClick={closeModal}
      >
        <MdClear />
      </StyledCancelButton>
    </StyledCreatePlaylistHeader>
  );
};

export default CreatePlaylistHeader;
