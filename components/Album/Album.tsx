import { useColor } from "color-thief-react";
import Head from "next/head";
import { useAlbum } from "../../Hooks";
import { ContentGradient } from "../Globals";
import AlbumControls from "./AlbumControls";
import AlbumHeader from "./AlbumHeader";
import AlbumSuggestions from "./AlbumSuggestions";
import AlbumTracks from "./AlbumTracks";

const Album = () => {
  const { name, image } = useAlbum();
  const { data } = useColor(image, "rgbString", {
    crossOrigin: "*",
    quality: 5,
  });

  return (
    <>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      {data && (
        <>
          <AlbumHeader bg={data} />
          <ContentGradient style={{ backgroundColor: data }} />
          <AlbumControls />
          <AlbumTracks />
          <AlbumSuggestions />
        </>
      )}
    </>
  );
};

export default Album;
