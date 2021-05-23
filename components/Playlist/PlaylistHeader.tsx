import { usePlaylist } from "../../Hooks";
import ContentHeader from "../ContentHeader/ContentHeader";
import { convertDuration } from "../Tracks/utils";

const PlaylistHeader = () => {
  const {
    name,
    image,
    description,
    owner: { id },
    _count,
    _sum: { duration },
  } = usePlaylist();

  return (
    <ContentHeader
      coverImage={image}
      type="playlist"
      title={name}
      infoId={id}
      infoName={id}
      total_tracks={_count}
      duration={convertDuration(duration)}
      desc={description}
    />
  );
};

export default PlaylistHeader;
