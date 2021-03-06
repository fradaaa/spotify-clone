import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handlePlaylistTracks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { playlistId } = req.query;

  if (req.method === "GET") {
    const { sort, order, offset, take } = req.query as {
      sort: "added" | "title" | "album" | "artist";
      order: "asc" | "desc";
      offset: string;
      take: string;
    };
    await handleGET(playlistId as string, sort, order, offset, take, res);
  } else if (req.method === "PUT") {
    const { trackId } = req.body;
    await handlePUT(playlistId as string, trackId, res);
  } else if (req.method === "DELETE") {
    const { trackId } = req.body;
    await handleDELETE(playlistId as string, trackId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

const handleGET = async (
  playlistId: string,
  sort: "added" | "title" | "album" | "artist",
  order: "asc" | "desc",
  offset: string,
  take: string,
  res: NextApiResponse
) => {
  const orderBy = {
    added: {
      added_at: order,
    },
    title: {
      track: {
        title: order,
      },
    },
    album: {
      track: {
        album: {
          name: order,
        },
      },
    },
    artist: {
      track: {
        album: {
          artist: {
            name: order,
          },
        },
      },
    },
  };

  const playlistTracks = await prisma.playlistTrack.findMany({
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
    orderBy: orderBy[sort],
    skip: Number(offset),
    take: Number(take),
  });

  const data = playlistTracks.map(({ track, added_at }) => ({
    ...track,
    added_at,
  }));

  res.status(200).json({ items: data });
};

const handlePUT = async (
  playlistId: string,
  trackId: string,
  res: NextApiResponse
) => {
  const track = await prisma.playlistTrack.upsert({
    create: {
      playlist: {
        connect: {
          id: playlistId,
        },
      },
      track: {
        connect: {
          id: trackId,
        },
      },
    },
    update: {
      playlist: {
        connect: {
          id: playlistId,
        },
      },
      track: {
        connect: {
          id: trackId,
        },
      },
    },
    where: {
      trackId_playlistId: {
        trackId,
        playlistId,
      },
    },
  });

  res.status(200).json(track);
};

const handleDELETE = async (
  playlistId: string,
  trackId: string,
  res: NextApiResponse
) => {
  const deletedTrack = await prisma.playlistTrack.delete({
    where: {
      trackId_playlistId: {
        trackId,
        playlistId,
      },
    },
  });

  res.status(200).json(deletedTrack);
};

export default handlePlaylistTracks;
