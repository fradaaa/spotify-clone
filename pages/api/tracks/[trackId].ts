import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { trackId } = req.query;

  const track = await prisma.track.findUnique({
    where: {
      id: trackId as string,
    },
    include: {
      artists: true,
      album: true,
    },
  });

  res.status(200).json(track);
};
