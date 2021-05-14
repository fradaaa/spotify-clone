import { Album } from ".prisma/client";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { Preview, PreviewItem } from "../Preview";

const ArtistAlbums = () => {
  const { id } = useArtist();
  const { data, error } = useSWR<Album[]>(`/api/artists/${id}/albums`);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <Preview title="Albums">
      {data.map(({ id, image, name, release_date, album_type }) => (
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
