import { useUser } from "@supabase/auth-helpers-react";
import { usePlaylist } from "../../Hooks";
import { EditPlaylistButton, PlayContentButton } from "../Buttons";
import { ContentControls } from "../Globals";

const PlaylistControls = () => {
  const user = useUser();
  const { id, ownerId, name } = usePlaylist();

  return (
    <ContentControls text={name}>
      <PlayContentButton id={id} />
      {user?.id === ownerId && <EditPlaylistButton />}
    </ContentControls>
  );
};

export default PlaylistControls;
