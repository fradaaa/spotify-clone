import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handleUserDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const users = await prisma.user.deleteMany({});

    res.status(200).json(users);
  } else {
    res.status(200);
  }
};

export default handleUserDelete;
