import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

const handleLikedArtistsTracks = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { sort, order, offset, take, artistId } = req.query as {
      artistId: string;
      sort: "added" | "title" | "album" | "artist";
      order: "asc" | "desc";
      offset: string;
      take: string;
    };
    const session = getSession(req, res);

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

    const likedSongs = await prisma.savedTrack.findMany({
      where: {
        AND: [
          {
            track: {
              artists: {
                some: {
                  id: artistId,
                },
              },
            },
          },
          {
            userId: session?.user.sub,
          },
        ],
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

    const tracks = likedSongs.map(({ added_at, track }) => ({
      ...track,
      added_at,
    }));

    res.status(200).json({ items: tracks });
  }
);

export default handleLikedArtistsTracks;
