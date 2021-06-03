import { Album, Artist } from ".prisma/client";
import useSWR from "swr";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

type Data = { items: (Album & { artist: Artist })[] };

const AlbumsCollection = () => {
  const { data } = useSWR<Data>("/api/me/albums");

  return (
    <Preview title="Albums">
      {data ? (
        data.items.map(({ id, image, name, artist: { name: artistName } }) => (
          <PreviewItem
            key={id}
            id={id}
            image={image}
            title={name}
            subText={artistName}
            type="album"
          />
        ))
      ) : (
        <RingLoader />
      )}
    </Preview>
  );
};

export default AlbumsCollection;
