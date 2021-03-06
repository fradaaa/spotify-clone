import { useAlbum } from "../../Hooks";
import { Preview, PreviewItem } from "../Preview";

const AlbumSuggestions = () => {
  const {
    album: {
      artist: { name: artistName },
    },
    albumSuggestions,
  } = useAlbum();

  return (
    <Preview title={`More by ${artistName}`}>
      {albumSuggestions.map(({ id, image, name, release_date, album_type }) => (
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

export default AlbumSuggestions;
