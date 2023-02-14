import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleLikedArtistsTracks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { sort, order, offset, take, artistId } = req.query as {
    artistId: string;
    sort: "added" | "title" | "album" | "artist";
    order: "asc" | "desc";
    offset: string;
    take: string;
  };

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

  const likedSongs = await prisma.savedTrack.findMany({
    where: {
      AND: [
        {
          track: {
            artists: {
              some: {
                id: artistId,
              },
            },
          },
        },
        {
          userId: session?.user.id,
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
    orderBy: orderBy[sort],
    skip: Number(offset),
    take: Number(take),
  });

  const tracks = likedSongs.map(({ added_at, track }) => ({
    ...track,
    added_at,
  }));

  res.status(200).json({ items: tracks });
};

export default handleLikedArtistsTracks;
