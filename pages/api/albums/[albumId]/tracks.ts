import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { albumId } = req.query;

  const albumTracks = await prisma.track.findMany({
    where: { album: { id: albumId as string } },
    orderBy: { track_number: "asc" },
    include: {
      artists: true,
    },
  });

  res.status(200).json(albumTracks);
};
