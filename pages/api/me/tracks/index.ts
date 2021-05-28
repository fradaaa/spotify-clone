import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = getSession(req, res);

  if (req.method === "GET") {
    await handleGET(user.sub, res);
  } else if (req.method === "PUT") {
    const { trackId } = req.body;
    await handlePUT(user.sub, trackId, res);
  } else if (req.method === "DELETE") {
    const { trackId } = req.body;
    await handleDELETE(user.sub, trackId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (userId: string, res: NextApiResponse) => {
  const total = await prisma.savedTrack.count({
    where: {
      userId,
    },
  });

  const savedTracks = await prisma.savedTrack.findMany({
    where: {
      userId: userId,
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
    take: 50,
  });

  const items = savedTracks.map(({ track, added_at }) => ({
    ...track,
    added_at,
  }));

  res.status(200).json({ items, total });
};

const handlePUT = async (
  userId: string,
  trackId: string,
  res: NextApiResponse
) => {
  const savedTrack = await prisma.savedTrack.create({
    data: {
      track: {
        connect: {
          id: trackId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  res.status(200).json(savedTrack);
};

const handleDELETE = async (
  userId: string,
  trackId: string,
  res: NextApiResponse
) => {
  const deletedTrack = await prisma.savedTrack.delete({
    where: {
      trackId_userId: {
        trackId,
        userId,
      },
    },
  });

  res.status(200).json(deletedTrack);
};
