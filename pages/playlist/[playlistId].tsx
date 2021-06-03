import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { RingLoader } from "../../components/Globals";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistContext } from "../../Context";

const PlaylistPage = () => {
  const router = useRouter();
  const { data } = useSWR(() => {
    return router.query.playlistId
      ? `/api/playlists/${router.query.playlistId}`
      : null;
  });

  if (!data) return <RingLoader />;

  return (
    <PlaylistContext.Provider value={data}>
      <Playlist />
    </PlaylistContext.Provider>
  );
};

export default PlaylistPage;
