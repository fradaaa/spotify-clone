import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import Album from "../../components/Album/Album";
import { RingLoader } from "../../components/Globals";
import { AlbumContext } from "../../Context";

const AlbumPage = () => {
  const router = useRouter();
  const { data } = useSWR(() =>
    router.query.albumId ? `/api/albums/${router.query.albumId}` : null
  );

  if (!data) return <RingLoader />;

  return (
    <AlbumContext.Provider value={data}>
      <Album />
    </AlbumContext.Provider>
  );
};

export default AlbumPage;
