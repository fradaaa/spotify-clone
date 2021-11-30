import { GetStaticPaths, GetStaticProps } from "next";
import Album from "../../components/Album/Album";
import { AlbumProps } from "../../components/Album/types";
import { AlbumContext } from "../../Context";
import { prisma } from "../../lib/prisma";

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

export const getStaticProps: GetStaticProps<AlbumProps> = async ({
  params,
}) => {
  const [album, duration, tracks] = await prisma.$transaction([
    prisma.album.findUnique({
      where: {
        id: params?.albumId as string,
      },
      include: {
        artist: true,
      },
    }),
    prisma.track.aggregate({
      where: {
        albumId: params?.albumId as string,
      },
      _sum: {
        duration: true,
      },
    }),
    prisma.track.findMany({
      where: {
        albumId: params?.albumId as string,
      },
      orderBy: { track_number: "asc" },
      include: {
        album: true,
        artists: true,
      },
    }),
  ]);

  if (!album) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      album: { ...album, duration: duration._sum.duration! },
      albumTracks: tracks,
    },
    revalidate: 60,
  };
};

const AlbumPage = ({ album, albumTracks }: AlbumProps) => {
  return (
    <AlbumContext.Provider value={{ album, albumTracks }}>
      <Album />
    </AlbumContext.Provider>
  );
};

export default AlbumPage;
