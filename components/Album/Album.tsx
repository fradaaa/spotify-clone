import { useColor } from "color-thief-react";
import Head from "next/head";
import { useCallback } from "react";
import { ColorContext, PlayContext } from "../../Context";
import { useAlbum, useAudioHelpers } from "../../Hooks";
import { ContentGradient } from "../Globals";
import AlbumHeader from "./AlbumHeader";
import AlbumSuggestions from "./AlbumSuggestions";
import AlbumTracks from "./AlbumTracks";

const Album = () => {
  const { id, name, image } = useAlbum();
  const { data } = useColor(image, "rgbString", {
    crossOrigin: "*",
    quality: 5,
  });
  const { playContent } = useAudioHelpers();

  const play = useCallback(
    (index: number) => {
      playContent(id, "album", index);
    },
    [id, playContent]
  );

  return (
    <PlayContext.Provider value={play}>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      {data && (
        <ColorContext.Provider value={data}>
          <AlbumHeader bg={data} />
          <ContentGradient style={{ backgroundColor: data }} />
          <AlbumTracks />
          <AlbumSuggestions />
        </ColorContext.Provider>
      )}
    </PlayContext.Provider>
  );
};

export default Album;
