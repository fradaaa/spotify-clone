import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistContext } from "../../Context";
import prisma from "../../lib/prisma";

export const getStaticPaths: GetStaticPaths = async () => {
  const playlists = await prisma.playlist.findMany({
    take: 50,
    select: {
      id: true,
    },
  });

  const artistsPaths = playlists.map(({ id }) => ({
    params: { playlistId: id },
  }));

  return {
    paths: artistsPaths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const requestedData = await prisma.$transaction([
    prisma.track.aggregate({
      _count: true,
      _sum: {
        duration: true,
      },
      where: {
        playlist_tracks: {
          some: {
            playlistId: params!.playlistId as string,
          },
        },
      },
    }),
    prisma.playlist.findUnique({
      where: {
        id: params!.playlistId as string,
      },
      include: {
        owner: true,
      },
    }),
  ]);

  if (!requestedData) {
    return {
      notFound: true,
    };
  }

  const [info, playlist] = requestedData;

  return {
    props: {
      playlist: {
        ...playlist,
        total: info._count,
        duration: info._sum.duration,
      },
    },
    revalidate: 60,
  };
};

const PlaylistPage = ({
  playlist,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PlaylistContext.Provider value={playlist}>
      <Playlist />
    </PlaylistContext.Provider>
  );
};

export default PlaylistPage;
