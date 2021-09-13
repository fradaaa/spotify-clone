import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleCheckSavedTracks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = getSession(req, res);
  const ids = req.query.ids as string;
  const idsArr = ids.split(",");

  const data = await Promise.all(
    idsArr.map((id) => {
      return prisma.savedTrack.findUnique({
        where: {
          trackId_userId: {
            trackId: id,
            userId: session?.user.sub || "",
          },
        },
      });
    })
  );

  const contains = data.map((t) => Boolean(t));

  res.status(200).json(contains);
};

export default handleCheckSavedTracks;
