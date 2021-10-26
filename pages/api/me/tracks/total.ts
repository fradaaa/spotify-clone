import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    const data = await prisma.savedTrack.count({
      where: {
        userId: session?.user.sub,
      },
    });

    res.status(200).json({ total: data });
  }
);
