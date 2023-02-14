import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleRoute = async (req: NextApiRequest, res: NextApiResponse) => {
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
    const { albumId } = req.body;
    await handlePUT(session?.user.id, albumId, res);
  } else if (req.method === "DELETE") {
    const { albumId } = req.body;
    await handleDELETE(session?.user.id, albumId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (userId: string, res: NextApiResponse) => {
  const savedAlbums = await prisma.savedAlbum.findMany({
    where: {
      userId,
    },
    include: {
      album: {
        include: {
          artist: true,
        },
      },
    },
    orderBy: {
      added_at: "desc",
    },
    take: 20,
  });

  const items = savedAlbums.map(({ album, added_at }) => ({
    ...album,
    added_at,
  }));

  res.status(200).json({ items });
};

const handlePUT = async (
  userId: string,
  albumId: string,
  res: NextApiResponse
) => {
  const savedAlbum = await prisma.savedAlbum.create({
    data: {
      album: {
        connect: {
          id: albumId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  res.status(200).json(savedAlbum);
};

const handleDELETE = async (
  userId: string,
  albumId: string,
  res: NextApiResponse
) => {
  const deletedAlbum = await prisma.savedAlbum.delete({
    where: {
      albumId_userId: {
        albumId,
        userId,
      },
    },
  });

  res.status(200).json(deletedAlbum);
};

export default handleRoute;
