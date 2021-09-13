import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

const handleSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, type } = req.query;

  if (type === "track") {
    const results = await prisma.track.findMany({
      where: {
        OR: [
          {
            title: {
              contains: q as string,
              mode: "insensitive",
            },
          },
          {
            artists: {
              some: {
                name: {
                  contains: q as string,
                  mode: "insensitive",
                },
              },
            },
          },
          {
            album: {
              name: {
                contains: q as string,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        album: true,
        artists: true,
      },
      take: 10,
    });

    res.status(200).json(results);
  } else {
    const tracks = await prisma.track.findMany({
      where: {
        OR: [
          {
            title: {
              contains: q as string,
              mode: "insensitive",
            },
          },
          {
            artists: {
              some: {
                name: {
                  contains: q as string,
                  mode: "insensitive",
                },
              },
            },
          },
          {
            album: {
              name: {
                contains: q as string,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      orderBy: {
        play_count: "desc",
      },
      include: {
        album: true,
        artists: true,
      },
      take: 15,
    });

    const artists = await prisma.artist.findMany({
      where: {
        OR: [
          {
            name: {
              contains: q as string,
              mode: "insensitive",
            },
          },
          {
            albums: {
              some: {
                name: {
                  contains: q as string,
                  mode: "insensitive",
                },
              },
            },
          },
        ],
      },
      take: 30,
    });

    const albums = await prisma.album.findMany({
      where: {
        OR: [
          {
            name: {
              contains: q as string,
              mode: "insensitive",
            },
          },
          {
            artist: {
              name: {
                contains: q as string,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        artist: true,
      },
      take: 30,
    });

    res.status(200).json({ tracks, artists, albums });
  }
};

export default handleSearch;
