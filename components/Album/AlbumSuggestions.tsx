import { Album } from ".prisma/client";
import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

const AlbumSuggestions = () => {
  const {
    album: {
      id: albumId,
      artist: { id: artistId },
    },
  } = useAlbum();
  const { data } = useSWR<Album[]>(`/api/artists/${artistId}/albums`, {
    revalidateOnFocus: false,
  });

  if (!data) return <RingLoader />;

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
