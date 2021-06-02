import { usePlaylist } from "../../Hooks";
import ContentHeader from "../ContentHeader/ContentHeader";
import { convertDuration } from "../Tracks/utils";

const PlaylistHeader = () => {
  const {
    name: playlistName,
    image,
    description,
    owner: { id, name },
    total,
    duration,
  } = usePlaylist();

  return (
    <ContentHeader
      coverImage={image}
      type="playlist"
      title={playlistName}
      infoId={id}
      infoName={name}
      total_tracks={total}
      duration={convertDuration(duration)}
      desc={description}
    />
  );
};

export default PlaylistHeader;
