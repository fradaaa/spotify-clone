import { Artist } from ".prisma/client";
import useSWR from "swr";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

type Data = { items: { artist: Artist }[] };

const ArtistsCollection = () => {
  const { data } = useSWR<Data>("/api/me/following");

  return (
    <Preview title="Artists">
      {data ? (
        data.items.map(({ artist: { id, image, name } }) => (
          <PreviewItem
            key={id}
            id={id}
            image={image}
            title={name}
            subText="Artist"
            type="artist"
            round
          />
        ))
      ) : (
        <RingLoader />
      )}
    </Preview>
  );
};

export default ArtistsCollection;
