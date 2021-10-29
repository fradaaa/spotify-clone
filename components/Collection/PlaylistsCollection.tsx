import { Playlist } from ".prisma/client";
import useSWR from "swr";
import { CreatePlaylistButton } from "../Buttons";
import { FlexRow, RingLoader } from "../Globals";
import { Preview, PreviewItem } from "../Preview";

const PlaylistsCollection = () => {
  const { data } = useSWR<Playlist[]>("/api/me/playlists");

  return (
    <Preview
      title={
        <FlexRow>
          Your playlists <CreatePlaylistButton />{" "}
        </FlexRow>
      }
    >
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
