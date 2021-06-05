import { Playlist } from ".prisma/client";
import useSWR from "swr";
import { RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

const PlaylistsCollection = () => {
  const { data } = useSWR<Playlist[]>("/api/me/playlists");

  return (
    <Preview title="Your Playlists">
      {data ? (
        data.map(({ id, image, name }) => (
          <PreviewItem
            key={id}
            id={id}
            image={image}
            title={name}
            subText="Playlist"
            type="playlist"
          />
        ))
      ) : (
        <RingLoader />
      )}
    </Preview>
  );
};

export default PlaylistsCollection;
