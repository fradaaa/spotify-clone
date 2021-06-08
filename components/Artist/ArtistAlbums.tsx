import { Album } from ".prisma/client";
import useSWR from "swr";
import { useArtist } from "../../Hooks";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

const ArtistAlbums = () => {
  const { id } = useArtist();
  const { data } = useSWR<Album[]>(`/api/artists/${id}/albums`, {
    revalidateOnFocus: false,
  });

  if (!data) return <RingLoader />;

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
