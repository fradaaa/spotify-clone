import { useUser } from "@auth0/nextjs-auth0";
import { usePlaylist } from "../../Hooks";
import { EditPlaylistButton, PlayContentButton } from "../Buttons";
import { ContentControls } from "../Globals";

const PlaylistControls = () => {
  const { user } = useUser();
  const { id, ownerId, name } = usePlaylist();

  return (
    <ContentControls text={name}>
      <PlayContentButton id={id} />
      {user?.sub === ownerId && <EditPlaylistButton />}
    </ContentControls>
  );
};

export default PlaylistControls;
