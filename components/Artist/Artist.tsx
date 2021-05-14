import Head from "next/head";
import { useArtist } from "../../Hooks";
import ArtistAlbums from "./ArtistAlbums";
import ArtistHeader from "./ArtistHeader";
import ArtistTopTracks from "./ArtistTopTracks";
import { ArtistContainer } from "./style";

const Artist = () => {
  const { name } = useArtist();

  return (
    <>
      <Head>
        <title>{`Spotify Clone - ${name}`}</title>
      </Head>
      <ArtistContainer>
        <ArtistHeader />
        <ArtistTopTracks />
        <ArtistAlbums />
      </ArtistContainer>
    </>
  );
};

export default Artist;
