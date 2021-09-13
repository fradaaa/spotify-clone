import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Artist from "../../components/Artist/Artist";
import { ArtistContext } from "../../Context";
import { prisma } from "../../lib/prisma";

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = await prisma.artist.findMany({
    take: 50,
    select: {
      id: true,
    },
  });

  const artistsPaths = artists.map(({ id }) => ({ params: { artistId: id } }));

  return {
    paths: artistsPaths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artist = await prisma.artist.findUnique({
    where: {
      id: params!.artistId as string,
    },
  });

  if (!artist) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artist,
    },
    revalidate: 60,
  };
};

const ArtistPage = ({
  artist,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ArtistContext.Provider value={artist}>
      <Artist />
    </ArtistContext.Provider>
  );
};

export default ArtistPage;
