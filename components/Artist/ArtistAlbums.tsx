import { useArtist } from "../../Hooks";
import { Preview, PreviewItem } from "../Preview";

const ArtistAlbums = () => {
  const { albums } = useArtist();

  return (
    <Preview title="Albums">
      {albums.map(({ id, image, name, release_date, album_type }) => (
        <PreviewItem
          key={id}
          id={id}
          image={image}
          title={name}
          subText={`${new Date(release_date).getFullYear()} • ${album_type}`}
          type={album_type}
        />
      ))}
    </Preview>
  );
};

export default ArtistAlbums;
