import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import Artist from "../../components/Artist/Artist";
import { ArtistContext } from "../../Context";

const ArtistPage = () => {
  const router = useRouter();
  const { data, error } = useSWR(() => {
    return router.query.artistId
      ? `/api/artists/${router.query.artistId}`
      : null;
  });

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <ArtistContext.Provider value={data}>
      <Artist />
    </ArtistContext.Provider>
  );
};

export default ArtistPage;
