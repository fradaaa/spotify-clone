import { useUser } from "@auth0/nextjs-auth0";
import { usePlaylist } from "../../Hooks";
import { EditPlaylistButton, PlayContentButton } from "../Buttons";
import { ContentControlsContainer } from "../Globals/style";

const PlaylistControls = () => {
  const { user } = useUser();
  const { id, ownerId } = usePlaylist();

  return (
    <ContentControlsContainer>
      <PlayContentButton id={id} />
      {user?.sub === ownerId && <EditPlaylistButton />}
    </ContentControlsContainer>
  );
};

export default PlaylistControls;
