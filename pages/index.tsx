import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const requestedData = await prisma.$transaction([
    prisma.artist.findMany({
      take: 10,
    }),
    prisma.album.findMany({
      take: 10,
      include: {
        artist: true,
      },
    }),
  ]);

  return {
    props: {
      artists: requestedData[0],
      albums: requestedData[1],
    },
    revalidate: 60,
  };
};

export default function HomePage({
  artists,
  albums,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Home artists={artists} albums={albums} />
    </>
  );
}
