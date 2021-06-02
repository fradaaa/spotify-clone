import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId } = req.query;

  const artistTopTracks = await prisma.track.findMany({
    where: { artists: { some: { id: artistId as string } } },
    orderBy: { play_count: "desc" },
    take: 10,
    include: {
      album: true,
      artists: true,
    },
  });

  res.status(200).json({ items: artistTopTracks });
};
