import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleAlbumTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  const { albumId } = req.query;

  const albumTracks = await prisma.track.findMany({
    where: {
      albumId: albumId as string,
    },
    orderBy: { track_number: "asc" },
    include: {
      album: true,
      artists: true,
    },
  });

  res.status(200).json({ items: albumTracks, total: albumTracks.length });
};

export default handleAlbumTracks;
