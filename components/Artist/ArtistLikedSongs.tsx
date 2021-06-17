import { Artist } from ".prisma/client";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import useSWR from "swr";
import { ColorContext, PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { ContentControls, RingLoader } from "../Globals";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { PlaylistColumns } from "../Tracks/TrackRows";
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
      <TrackConfigProvider showDate>
        <ColorContext.Provider value="#424242">
          <ContentControls text={`Liked songs by ${data.name}`}>
            <PlayContentButton id={router.query.artistId as string} />
          </ContentControls>
          <ArtistTopTracksContainer>
            <ArtistSubHeaderText>{`Liked Songs By ${data.name}`}</ArtistSubHeaderText>
            <PlaylistColumns />
            <TracksPage url={`/api/artists/${data.id}/liked`} altIndex />
          </ArtistTopTracksContainer>
        </ColorContext.Provider>
      </TrackConfigProvider>
    </PlayContext.Provider>
  ) : (
    <RingLoader />
  );
};

export default ArtistLikedSongs;
