import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { user } = getSession(req, res);
    const playlists = await prisma.playlist.findMany({
      where: {
        ownerId: user.sub,
      },
    });

    res.status(200).json(playlists);
  }
);
