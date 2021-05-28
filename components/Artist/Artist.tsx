import { useColor } from "color-thief-react";
import Head from "next/head";
import { useArtist } from "../../Hooks";
import { ContentGradient } from "../Globals";
import ArtistAlbums from "./ArtistAlbums";
import ArtistControls from "./ArtistControls";
import ArtistHeader from "./ArtistHeader";
import ArtistTopTracks from "./ArtistTopTracks";

const Artist = () => {
  const { name, header_image } = useArtist();
  const { data } = useColor(header_image, "rgbString", {
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
          <ArtistHeader />
          <ContentGradient style={{ backgroundColor: data }} />
          <ArtistControls />
          <ArtistTopTracks />
          <ArtistAlbums />
        </>
      )}
    </>
  );
};

export default Artist;
