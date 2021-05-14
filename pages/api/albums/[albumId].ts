import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { albumId } = req.query;

  const duration = await prisma.track.aggregate({
    where: {
      albumId: albumId as string,
    },
    sum: {
      duration: true,
    },
  });
  const album = await prisma.album.findUnique({
    where: {
      id: albumId as string,
    },
    include: {
      artist: true,
    },
  });
  const {
    sum: { duration: album_duration },
  } = duration;
  const data = { ...album, album_duration };

  res.status(200).json(data);
};
