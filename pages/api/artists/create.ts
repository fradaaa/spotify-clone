import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { artistId, token } = req.query;

  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  const { images, name, id } = data;
  const artist = await prisma.artist.create({
    data: {
      id,
      name,
      image: images[0].url,
    },
  });

  res.status(200).json(artist);
};
