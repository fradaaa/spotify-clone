import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { albumId } = req.query;

  const requestedData = await prisma.$transaction([
    prisma.track.aggregate({
      where: {
        albumId: albumId as string,
      },
      _sum: {
        duration: true,
      },
    }),
    prisma.album.findUnique({
      where: {
        id: albumId as string,
      },
      include: {
        artist: true,
      },
    }),
  ]);

  const [duration, album] = requestedData;
  const data = { ...album, duration: duration._sum.duration };

  res.status(200).json(data);
};
