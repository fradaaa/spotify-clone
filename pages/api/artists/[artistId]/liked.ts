import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

const handleLikedArtistsTracks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { artistId } = req.query;
  const session = getSession(req, res);

  const likedSongs = await prisma.savedTrack.findMany({
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
    include: {
      track: {
        include: {
          album: true,
          artists: true,
        },
      },
    },
    orderBy: {
      added_at: "desc",
    },
  });

  const tracks = likedSongs.map(({ added_at, track }) => ({
    ...track,
    added_at,
  }));

  res.status(200).json({ items: tracks });
};

export default handleLikedArtistsTracks;
