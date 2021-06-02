import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const artists = await prisma.artist.findMany({
    take: 10,
  });

  res.status(200).json(artists);
};
