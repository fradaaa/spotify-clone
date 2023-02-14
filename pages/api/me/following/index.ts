import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleFollowingArtists = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
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

  if (req.method === "GET") {
    await handleGET(session?.user.id, res);
  } else if (req.method === "PUT") {
    const { artistId } = req.body;
    await handlePUT(session?.user.id, artistId, res);
  } else if (req.method === "DELETE") {
    const { artistId } = req.body;
    await handleDELETE(session?.user.id, artistId, res);
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
