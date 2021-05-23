import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { playlistId } = req.query;

  const info = await prisma.track.aggregate({
    where: {
      in_playlists: {
        some: {
          id: playlistId as string,
        },
      },
    },
    _count: true,
    _sum: {
      duration: true,
    },
  });

  const playlist = await prisma.playlist.findUnique({
    where: {
      id: playlistId as string,
    },
    include: {
      owner: true,
    },
  });

  res.status(200).json({ ...playlist, ...info });
};
