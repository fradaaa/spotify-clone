import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, id } = req.query;

  if (type === "artist") {
    await handleArtist(id as string, res);
  } else if (type === "album") {
    await handleAlbum(id as string, res);
  } else if (type === "playlist") {
    await handlePlaylist(id as string, res);
  }
};

const handleArtist = async (artistId: string, res: NextApiResponse) => {
  const tracks = await prisma.track.findMany({
    where: {
      artists: {
        some: {
          id: artistId,
        },
      },
    },
    include: {
      album: true,
      artists: true,
    },
    orderBy: {
      play_count: "desc",
    },
    take: 50,
  });

  res.status(200).json(tracks);
};

const handleAlbum = async (albumId: string, res: NextApiResponse) => {
  const tracks = await prisma.track.findMany({
    where: {
      albumId,
    },
    include: {
      album: true,
      artists: true,
    },
    orderBy: {
      track_number: "asc",
    },
  });

  res.status(200).json(tracks);
};

const handlePlaylist = async (playlistId: string, res: NextApiResponse) => {
  const data = await prisma.playlistTrack.findMany({
    where: {
      playlistId,
    },
    include: {
      track: {
        include: {
          album: true,
          artists: true,
        },
      },
    },
    orderBy: {
      added_at: "desc",
    },
  });

  const tracks = data.map(({ track }) => ({ ...track }));

  res.status(200).json(tracks);
};
