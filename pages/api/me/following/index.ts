import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleFollowingArtists = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = getSession(req, res);

  if (req.method === "GET") {
    await handleGET(session?.user.sub, res);
  } else if (req.method === "PUT") {
    const { artistId } = req.body;
    await handlePUT(session?.user.sub, artistId, res);
  } else if (req.method === "DELETE") {
    const { artistId } = req.body;
    await handleDELETE(session?.user.sub, artistId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (userId: string, res: NextApiResponse) => {
  const followedArtists = await prisma.followedArtist.findMany({
    where: {
      userId,
    },
    include: {
      artist: true,
    },
    orderBy: {
      added_at: "desc",
    },
    take: 50,
  });

  const items = followedArtists.map(({ artist, added_at }) => ({
    artist,
    added_at,
  }));

  res.status(200).json({ items });
};

const handlePUT = async (
  userId: string,
  artistId: string,
  res: NextApiResponse
) => {
  const followedArtist = await prisma.followedArtist.create({
    data: {
      artist: {
        connect: {
          id: artistId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  res.status(200).json(followedArtist);
};

const handleDELETE = async (
  userId: string,
  artistId: string,
  res: NextApiResponse
) => {
  const deletedArtist = await prisma.followedArtist.delete({
    where: {
      artistId_userId: {
        artistId,
        userId,
      },
    },
  });

  res.status(200).json(deletedArtist);
};

export default handleFollowingArtists;
