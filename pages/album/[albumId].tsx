import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Album from "../../components/Album/Album";
import { AlbumContext } from "../../Context";
import prisma from "../../lib/prisma";

export const getStaticPaths: GetStaticPaths = async () => {
  const albums = await prisma.album.findMany({
    take: 50,
    select: {
      id: true,
    },
  });

  const albumPaths = albums.map(({ id }) => ({ params: { albumId: id } }));

  return {
    paths: albumPaths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const requestedData = await prisma.$transaction([
    prisma.track.aggregate({
      where: {
        albumId: params!.albumId as string,
      },
      _sum: {
        duration: true,
      },
    }),
    prisma.album.findUnique({
      where: {
        id: params!.albumId as string,
      },
      include: {
        artist: true,
      },
    }),
  ]);

  if (!requestedData) {
    return {
      notFound: true,
    };
  }

  const [duration, album] = requestedData;

  return {
    props: {
      album: {
        ...album,
        duration: duration._sum.duration,
      },
    },
    revalidate: 60,
  };
};

const AlbumPage = ({
  album,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <AlbumContext.Provider value={album}>
      <Album />
    </AlbumContext.Provider>
  );
};

export default AlbumPage;
