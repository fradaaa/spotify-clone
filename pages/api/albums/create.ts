import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId, token } = req.query;

  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=RU&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  let items = data.items;

  await Promise.all(
    items.map(
      async ({
        id,
        album_type,
        artists,
        images,
        name,
        release_date,
        total_tracks,
      }) => {
        const artist = artists[0];
        await prisma.album.create({
          data: {
            id,
            album_type,
            name,
            release_date,
            image: images[0].url,
            total_tracks,
            artist: {
              connect: {
                id: artist.id,
              },
            },
          },
        });
      }
    )
  );

  res.status(200).json(items);
};
