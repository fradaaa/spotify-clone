import { Artist } from ".prisma/client";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import TracksPage from "../Tracks/TracksPage";
import { ArtistSubHeaderText, ArtistTopTracksContainer } from "./style";

const ArtistLikedSongs = () => {
  const router = useRouter();
  const { data } = useSWR<Artist>(() => {
    return router.query.artistId
      ? `/api/artists/${router.query.artistId}`
      : null;
  });
  const { playContent } = useAudioHelpers();

  const play = useCallback(
    (index: number) => {
      playContent(router.query.artistId as string, "likedArtist", index);
    },
    [router.query.artistId, playContent]
  );

  return data ? (
    <PlayContext.Provider value={play}>
      <ArtistTopTracksContainer>
        <ArtistSubHeaderText>{`Liked Songs By ${data.name}`}</ArtistSubHeaderText>
        <TracksPage
          url={`/api/artists/${data.id}/liked`}
          artist
          config={{
            showImage: true,
            showArtists: true,
            showPlay: true,
          }}
        />
      </ArtistTopTracksContainer>
    </PlayContext.Provider>
  ) : null;
};

export default ArtistLikedSongs;
