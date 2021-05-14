import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId, token } = req.query;

  const artistAlbums = await prisma.album.findMany({
    where: { artistId: artistId as string },
    select: {
      id: true,
    },
  });

  const getAlbumURL = (id: string) =>
    `https://api.spotify.com/v1/albums/${id}/tracks?market=RU`;
  const albumURLs = artistAlbums.map(({ id }) => getAlbumURL(id));
  const tracks = [];

  await Promise.all(
    albumURLs.map(async (url, i) => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const items = data.items;
      await Promise.all(
        items.map(async ({ id, name, artists, duration_ms, track_number }) => {
          const track = await prisma.track.create({
            data: {
              id,
              title: name,
              duration: Math.round(duration_ms / 1000),
              track_number,
              artists: {
                connectOrCreate: artists.map(({ id, name }) => ({
                  where: { id },
                  create: {
                    id,
                    name,
                  },
                })),
              },
              album: {
                connect: {
                  id: artistAlbums[i].id,
                },
              },
            },
          });

          tracks.push(track);
        })
      );
    })
  );

  res.status(200).json(tracks);
};
