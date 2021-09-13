import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleSavedTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res);

  if (req.method === "GET") {
    const { offset, take } = req.query;
    await handleGET(session?.user.sub, offset as string, take as string, res);
  } else if (req.method === "PUT") {
    const { trackId } = req.body;
    await handlePUT(session?.user.sub, trackId, res);
  } else if (req.method === "DELETE") {
    const { trackId } = req.body;
    await handleDELETE(session?.user.sub, trackId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (
  userId: string,
  offset: string,
  take: string,
  res: NextApiResponse
) => {
  const [savedTracks, total] = await prisma.$transaction([
    prisma.savedTrack.findMany({
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
      skip: Number(offset),
      take: Number(take),
    }),
    prisma.savedTrack.count({ where: { userId } }),
  ]);

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

export default handleSavedTracks;
