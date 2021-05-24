import { usePlaylist } from "../../Hooks";
import ContentHeader from "../ContentHeader/ContentHeader";
import { convertDuration } from "../Tracks/utils";

const PlaylistHeader = () => {
  const {
    name: playlistName,
    image,
    description,
    owner: { id, name },
    _count,
    _sum: { duration },
  } = usePlaylist();

  return (
    <ContentHeader
      coverImage={image}
      type="playlist"
      title={playlistName}
      infoId={id}
      infoName={name}
      total_tracks={_count}
      duration={convertDuration(duration)}
      desc={description}
    />
  );
};

export default PlaylistHeader;
