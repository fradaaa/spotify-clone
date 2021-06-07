import { PlayContentButton } from "../Buttons";
import { ContentControls } from "../Globals";

const PlaylistControls = () => {
  return (
    <ContentControls text="Liked songs">
      <PlayContentButton id={"42"} />
    </ContentControls>
  );
};

export default PlaylistControls;
