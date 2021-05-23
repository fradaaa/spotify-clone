import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistContext } from "../../Context";

const PlaylistPage = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/playlists/${router.query.playlistId as string}`
  );

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <PlaylistContext.Provider value={data}>
      <Playlist />
    </PlaylistContext.Provider>
  );
};

export default PlaylistPage;
