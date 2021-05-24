import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, type } = req.query;

  if (type === "track") {
    const results = await prisma.track.findMany({
      where: {
        OR: [
          {
            title: {
              contains: q as string,
              mode: "insensitive",
            },
          },
          {
            artists: {
              some: {
                name: {
                  contains: q as string,
                  mode: "insensitive",
                },
              },
            },
          },
          {
            album: {
              name: {
                contains: q as string,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        album: true,
        artists: true,
      },
      take: 10,
    });

    res.status(200).json(results);
  }
};
