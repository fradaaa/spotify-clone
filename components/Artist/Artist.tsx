import { useColor } from "color-thief-react";
import Head from "next/head";
import { useCallback } from "react";
import { ColorContext, PlayContext } from "../../Context";
import { useArtist, useAudioHelpers } from "../../Hooks";
import { ContentGradient } from "../Globals";
import ArtistAlbums from "./ArtistAlbums";
import ArtistControls from "./ArtistControls";
import ArtistHeader from "./ArtistHeader";
import ArtistTopTracks from "./ArtistTopTracks";

const Artist = () => {
  const {
    artist: { id, name, header_image },
  } = useArtist();
  const { data } = useColor(header_image, "rgbString", {
    crossOrigin: "*",
    quality: 5,
  });
  const { playContent } = useAudioHelpers();

  const play = useCallback(
    (index: number) => {
      playContent(id, "artist", index);
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
          <ArtistHeader />
          <ContentGradient style={{ backgroundColor: data }} />
          <ArtistControls />
          <ArtistTopTracks />
          <ArtistAlbums />
        </ColorContext.Provider>
      )}
    </PlayContext.Provider>
  );
};

export default Artist;
