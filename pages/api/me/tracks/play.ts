import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    let tracks;
    const { type, id } = req.query;
    const session = getSession(req, res);

    if (type === "liked") {
      tracks = await prisma.savedTrack.findMany({
        where: {
          userId: session?.user.sub,
        },
        include: {
          track: {
            include: {
              artists: true,
              album: true,
            },
          },
        },
        orderBy: {
          added_at: "desc",
        },
      });
    } else if (type === "likedArtist") {
      tracks = await prisma.savedTrack.findMany({
        where: {
          AND: [
            {
              userId: session?.user.sub,
            },
            {
              track: {
                artists: {
                  some: {
                    id: id as string,
                  },
                },
              },
            },
          ],
        },
        include: {
          track: {
            include: {
              artists: true,
              album: true,
            },
          },
        },
        orderBy: {
          added_at: "desc",
        },
      });
    }

    const data = tracks && tracks.map(({ track }) => ({ ...track }));

    res.status(200).json(data);
  }
);
