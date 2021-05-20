import { useColor } from "color-thief-react";
import Head from "next/head";
import { useAlbum } from "../../Hooks";
import AlbumHeader from "./AlbumHeader";
import AlbumSuggestions from "./AlbumSuggestions";
import AlbumTracks from "./AlbumTracks";
import { AlbumContainer } from "./style";

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
      <AlbumContainer>
        {data && (
          <>
            <AlbumHeader bg={data} />
            <AlbumTracks />
            <AlbumSuggestions />
          </>
        )}
      </AlbumContainer>
    </>
  );
};

export default Album;
