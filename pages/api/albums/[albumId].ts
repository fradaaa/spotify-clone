import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { albumId } = req.query;

  const album = await prisma.album.findUnique({
    where: {
      id: albumId as string,
    },
  });

  res.status(200).json(album);
};
