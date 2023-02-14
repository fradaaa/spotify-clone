import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleSavedTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = createServerSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return res.status(401).json({
      error: "not_authenticated",
      description:
        "The user does not have an active session or is not authenticated",
    });

  const userId = session?.user.id;

  if (req.method === "GET") {
    const { sort, order, offset, take } = req.query as {
      sort: "added" | "title" | "album" | "artist";
      order: "asc" | "desc";
      offset: string;
      take: string;
    };
    await handleGET(userId, sort, order, offset, take, res);
  } else if (req.method === "PUT") {
    const { trackId } = req.body;
    await handlePUT(userId, trackId, res);
  } else if (req.method === "DELETE") {
    const { trackId } = req.body;
    await handleDELETE(userId, trackId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (
  userId: string,
  sort: "added" | "title" | "album" | "artist",
  order: "asc" | "desc",
  offset: string,
  take: string,
  res: NextApiResponse
) => {
  const orderBy = {
    added: {
      added_at: order,
    },
    title: {
      track: {
        title: order,
      },
    },
    album: {
      track: {
        album: {
          name: order,
        },
      },
    },
    artist: {
      track: {
        album: {
          artist: {
            name: order,
          },
        },
      },
    },
  };

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
    orderBy: orderBy[sort],
    skip: Number(offset),
    take: Number(take),
  });

  const items = savedTracks.map(({ track, added_at }) => ({
    ...track,
    added_at,
  }));

  res.status(200).json({ items });
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
