import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = createServerSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const data = await prisma.savedTrack.count({
    where: {
      userId: session?.user.id,
    },
  });

  res.status(200).json({ total: data });
};

export default handleRoute;
