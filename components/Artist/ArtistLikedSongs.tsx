import { Artist } from ".prisma/client";
import { useRouter } from "next/dist/client/router";
import { useCallback, useMemo } from "react";
import useSWR from "swr";
import { ColorContext, PlayContext } from "../../Context";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { useAudioHelpers } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { RingLoader } from "../Globals";
import { ContentControls } from "../Globals";
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

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: false,
      showPlay: true,
      showDate: true,
    }),
    []
  );

  return data ? (
    <TrackConfigContext.Provider value={trackConfig}>
      <PlayContext.Provider value={play}>
        <ColorContext.Provider value="#424242">
          <ContentControls text={`Liked songs by ${data.name}`}>
            <PlayContentButton id={router.query.artistId as string} />
          </ContentControls>
          <ArtistTopTracksContainer>
            <ArtistSubHeaderText>{`Liked Songs By ${data.name}`}</ArtistSubHeaderText>
            <TracksPage url={`/api/artists/${data.id}/liked`} altIndex />
          </ArtistTopTracksContainer>
        </ColorContext.Provider>
      </PlayContext.Provider>
    </TrackConfigContext.Provider>
  ) : (
    <RingLoader />
  );
};

export default ArtistLikedSongs;
