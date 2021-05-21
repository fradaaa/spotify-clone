import { useAlbum } from "../../Hooks";
import ContentHeader from "../ContentHeader/ContentHeader";

const AlbumHeader = ({ bg }: { bg: string }) => {
  const {
    album_type,
    name,
    image,
    release_date,
    total_tracks,
    album_duration,
    artist: { id, name: artistName, image: artistImage },
  } = useAlbum();
  const year = new Date(release_date).getFullYear();
  const minutes = Math.floor(album_duration / 60);
  const seconds = album_duration % 60;
  const dur = `${minutes} min ${seconds} sec`;

  return (
    <ContentHeader
      bg={bg}
      coverImage={image}
      type={album_type}
      title={name}
      infoImage={artistImage}
      infoId={id}
      infoName={artistName}
      total_tracks={total_tracks}
      year={year}
      duration={dur}
    />
  );
};

export default AlbumHeader;
