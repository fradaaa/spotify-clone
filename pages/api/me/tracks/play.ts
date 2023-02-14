import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  let tracks;
  const { type, id } = req.query;

  const supabase = createServerSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (type === "liked") {
    tracks = await prisma.savedTrack.findMany({
      where: {
        userId: session?.user.id,
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
            userId: session?.user.id,
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
};

export default handleRoute;
