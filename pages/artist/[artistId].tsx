import { GetStaticPaths, GetStaticProps } from "next";
import Artist from "../../components/Artist/Artist";
import { ArtistProps } from "../../components/Artist/types";
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

export const getStaticProps: GetStaticProps<ArtistProps> = async ({
  params,
}) => {
  const [artist, albums, topTracks] = await prisma.$transaction([
    prisma.artist.findUnique({
      where: {
        id: params?.artistId as string,
      },
    }),
    prisma.album.findMany({
      where: { artistId: params?.artistId as string },
    }),
    prisma.track.findMany({
      where: { artists: { some: { id: params?.artistId as string } } },
      orderBy: { play_count: "desc" },
      take: 10,
      include: {
        album: true,
        artists: true,
      },
    }),
  ]);

  if (!artist) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artist,
      albums,
      topTracks,
    },
    revalidate: 60,
  };
};

const ArtistPage = ({ artist, albums, topTracks }: ArtistProps) => {
  return (
    <ArtistContext.Provider value={{ artist, albums, topTracks }}>
      <Artist />
    </ArtistContext.Provider>
  );
};

export default ArtistPage;
