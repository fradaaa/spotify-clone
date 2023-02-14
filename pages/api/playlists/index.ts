import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handleRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description } = req.body;

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

  if (req.method === "POST") {
    const playlist = await prisma.playlist.create({
      data: {
        name,
        description,
        owner: {
          connect: {
            id: session?.user.id,
          },
        },
      },
    });
    res.status(200).json(playlist);
  } else if (req.method === "PUT") {
    const { id } = req.body;
    const updatedPlaylist = await prisma.playlist.update({
      where: {
        id,
      },
      data: {
        description,
        name,
      },
    });

    res.status(200).json(updatedPlaylist);
  }
};

export default handleRoute;
