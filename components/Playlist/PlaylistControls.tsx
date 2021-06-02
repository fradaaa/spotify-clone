import { usePlaylist } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { ContentControlsContainer } from "../Globals/style";

const PlaylistControls = () => {
  const { id } = usePlaylist();

  return (
    <ContentControlsContainer>
      <PlayContentButton id={id} />
    </ContentControlsContainer>
  );
};

export default PlaylistControls;
