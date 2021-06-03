import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);
    const { name, description } = req.body;
    if (req.method === "POST") {
      const playlist = await prisma.playlist.create({
        data: {
          name,
          description,
          owner: {
            connect: {
              id: session?.user.sub,
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
  }
);
