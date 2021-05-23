import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { playlistId } = req.query;

  if (req.method === "GET") {
    await handleGET(playlistId as string, res);
  } else if (req.method === "POST") {
    const { trackId } = req.body;
    await handlePOST(playlistId as string, trackId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (playlistId: string, res: NextApiResponse) => {
  const playlistTracks = await prisma.track.findMany({
    where: {
      in_playlists: {
        some: {
          id: playlistId,
        },
      },
    },
    include: {
      album: true,
      artists: true,
    },
  });

  res.status(200).json(playlistTracks);
};

const handlePOST = async (
  playlistId: string,
  trackId: string,
  res: NextApiResponse
) => {
  const track = await prisma.playlist.update({
    data: {
      tracks: {
        connect: {
          id: trackId,
        },
      },
    },
    where: {
      id: playlistId,
    },
  });

  res.status(201).json(track);
};
