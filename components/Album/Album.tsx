import Head from "next/head";
import { useAlbum } from "../../Hooks";
import AlbumHeader from "./AlbumHeader";
import AlbumSuggestions from "./AlbumSuggestions";
import AlbumTracks from "./AlbumTracks";
import { AlbumContainer } from "./style";

const Album = () => {
  const { name } = useAlbum();

  return (
    <>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      <AlbumContainer>
        <AlbumHeader />
        <AlbumTracks />
        <AlbumSuggestions />
      </AlbumContainer>
    </>
  );
};

export default Album;
