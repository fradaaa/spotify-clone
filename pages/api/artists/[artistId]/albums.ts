import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleArtistALbums = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { artistId } = req.query;

  const artistAlbums = await prisma.album.findMany({
    where: { artistId: artistId as string },
  });

  res.status(200).json(artistAlbums);
};

export default handleArtistALbums;
