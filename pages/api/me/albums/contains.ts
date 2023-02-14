import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleCheckSavedAlbums = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const ids = req.query.ids as string;
  const idsArr = ids.split(",");

  const supabase = createServerSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const data = await Promise.all(
    idsArr.map((id) => {
      return prisma.savedAlbum.findUnique({
        where: {
          albumId_userId: {
            albumId: id as string,
            userId: session?.user.id || "",
          },
        },
      });
    })
  );

  const contains = data.map((t) => Boolean(t));

  res.status(200).json(contains);
};

export default handleCheckSavedAlbums;
