import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId } = req.query;
  const session = getSession(req, res);

  const likedSongs = await prisma.savedTrack.count({
    where: {
      AND: [
        {
          track: {
            artists: {
              some: {
                id: artistId as string,
              },
            },
          },
        },
        {
          userId: session?.user.sub,
        },
      ],
    },
  });

  res.status(200).json(likedSongs);
};
