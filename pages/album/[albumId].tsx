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
        artists: true,
      },
    }),
  ]);

  if (!album) {
    return {
      notFound: true,
    };
  }

  const albums = await prisma.album.findMany({
    where: {
      AND: [
        {
          artistId: album.artist.id,
        },
        {
          id: {
            not: params?.albumId as string,
          },
        },
      ],
    },
  });

  return {
    props: {
      album: { ...album, duration: duration._sum.duration! },
      albumTracks: tracks.map((track) => ({ ...track, album })),
      albumSuggestions: albums,
    },
    revalidate: 60,
  };
};

const AlbumPage = ({ album, albumTracks, albumSuggestions }: AlbumProps) => {
  return (
    <AlbumContext.Provider value={{ album, albumTracks, albumSuggestions }}>
      <Album />
    </AlbumContext.Provider>
  );
};

export default AlbumPage;
