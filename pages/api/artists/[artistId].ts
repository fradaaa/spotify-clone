import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId } = req.query;

  const artist = await prisma.artist.findUnique({
    where: {
      id: artistId as string,
    },
  });

  res.status(200).json(artist);
};
