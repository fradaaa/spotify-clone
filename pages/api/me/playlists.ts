import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handleRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = createServerSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const playlists = await prisma.playlist.findMany({
    where: {
      ownerId: session?.user.id,
    },
  });

  res.status(200).json(playlists);
};

export default handleRoute;
