import { usePlaylist } from "../../Hooks";
import { EditPlaylistButton, PlayContentButton } from "../Buttons";
import { ContentControlsContainer } from "../Globals/style";

const PlaylistControls = () => {
  const { id } = usePlaylist();

  return (
    <ContentControlsContainer>
      <PlayContentButton id={id} />
      <EditPlaylistButton />
    </ContentControlsContainer>
  );
};

export default PlaylistControls;
