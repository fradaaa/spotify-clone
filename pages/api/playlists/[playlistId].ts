import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handlePlaylist = async (req: NextApiRequest, res: NextApiResponse) => {
  const { playlistId } = req.query;

  const requestedData = await prisma.$transaction([
    prisma.track.aggregate({
      _count: true,
      _sum: {
        duration: true,
      },
      where: {
        playlist_tracks: {
          some: {
            playlistId: playlistId as string,
          },
        },
      },
    }),
    prisma.playlist.findUnique({
      where: {
        id: playlistId as string,
      },
      include: {
        owner: true,
      },
    }),
  ]);

  const [info, playlist] = requestedData;
  const data = {
    ...playlist,
    total: info._count,
    duration: info._sum.duration,
  };

  res.status(200).json(data);
};

export default handlePlaylist;
