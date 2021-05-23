import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const { user } = getSession(req, res);
      const { name, description } = req.body;
      const playlist = await prisma.playlist.create({
        data: {
          name,
          description,
          owner: {
            connect: {
              id: user.sub,
            },
          },
        },
      });
      res.status(200).json(playlist);
    } else {
      res.status(200);
    }
  }
);
