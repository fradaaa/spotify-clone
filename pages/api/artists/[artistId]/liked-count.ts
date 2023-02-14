import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiHandler } from "next/types";
import { prisma } from "../../../../lib/prisma";

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const { artistId } = req.query;

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

  const likedSongs = await prisma.savedTrack.count({
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
          userId: session?.user.id,
        },
      ],
    },
  });

  res.status(200).json(likedSongs);
};

export default ProtectedRoute;
