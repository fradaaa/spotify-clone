import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import Artist from "../../components/Artist/Artist";
import { RingLoader } from "../../components/Globals";
import { ArtistContext } from "../../Context";

const ArtistPage = () => {
  const router = useRouter();
  const { data } = useSWR(() => {
    return router.query.artistId
      ? `/api/artists/${router.query.artistId}`
      : null;
  });

  if (!data) return <RingLoader />;

  return (
    <ArtistContext.Provider value={data}>
      <Artist />
    </ArtistContext.Provider>
  );
};

export default ArtistPage;
