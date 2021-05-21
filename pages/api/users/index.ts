import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany({
    include: {
      playlists: true,
    },
  });

  res.status(200).json(users);
};
