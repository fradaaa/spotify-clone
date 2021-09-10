import { MdClear } from "react-icons/md";
import {
  CreatePlaylistHeaderText,
  StyledCancelButton,
  StyledCreatePlaylistHeader,
} from "../style";

type CreatePlaylistHeaderProps = {
  closeModal: () => void;
  headerText: string;
};

const CreatePlaylistHeader = ({
  closeModal,
  headerText,
}: CreatePlaylistHeaderProps) => {
  return (
    <StyledCreatePlaylistHeader>
      <CreatePlaylistHeaderText>{headerText}</CreatePlaylistHeaderText>
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
