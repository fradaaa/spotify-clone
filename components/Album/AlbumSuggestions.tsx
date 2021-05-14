import { Album } from ".prisma/client";
import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { Preview, PreviewItem } from "../Preview";

const AlbumSuggestions = () => {
  const {
    artist: { id, name },
    id: albumId,
  } = useAlbum();
  const { data, error } = useSWR<Album[]>(`/api/artists/${id}/albums`);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <Preview title={`More by ${name}`}>
      {data.map(({ id, image, name, release_date, album_type }) =>
        id === albumId ? null : (
          <PreviewItem
            key={id}
            id={id}
            image={image}
            title={name}
            subText={`${new Date(release_date).getFullYear()} • ${album_type}`}
            type={album_type}
          />
        )
      )}
    </Preview>
  );
};

export default AlbumSuggestions;
