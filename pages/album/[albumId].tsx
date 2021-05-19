import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import Album from "../../components/Album/Album";
import { AlbumContext } from "../../Context";

const AlbumPage = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/albums/${router.query.albumId as string}`
  );

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <AlbumContext.Provider value={data}>
      <Album />
    </AlbumContext.Provider>
  );
};

export default AlbumPage;