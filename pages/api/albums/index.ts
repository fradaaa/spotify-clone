import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const handleArtistAlbums = async (_: NextApiRequest, res: NextApiResponse) => {
  const artistAlbums = await prisma.album.findMany({
    take: 10,
    include: {
      artist: true,
    },
  });

  res.status(200).json(artistAlbums);
};

export default handleArtistAlbums;
