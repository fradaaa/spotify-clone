import { Artist } from ".prisma/client";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import useSWR from "swr";
import { ColorContext, PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import { PlayContentButton } from "../Buttons";
import { ContentControls, RingLoader } from "../Globals";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import TracksList from "../TracksList/TracksList";
import { ArtistSubHeaderText, ArtistTopTracksContainer } from "./style";

const ArtistLikedSongs = () => {
  const user = useUser();
  const router = useRouter();
  const { playContent } = useAudioHelpers();
  const { data } = useSWR<number>(() =>
    user && router.query.artistId
      ? `/api/artists/${router.query.artistId}/liked-count`
      : null
  );
  const { data: artist } = useSWR<Artist>(() =>
    data ? `/api/artists/${router.query.artistId}` : null
  );
  const url = `/api/artists/${router.query.artistId}/liked`;

  const play = useCallback(
    (index: number) => {
      playContent(router.query.artistId as string, "likedArtist", index);
    },
    [router.query.artistId, playContent]
  );

  return data && artist ? (
    <PlayContext.Provider value={play}>
      <TrackConfigProvider showDate>
        <ColorContext.Provider value="#424242">
          <ContentControls text={`Liked songs by ${artist.name}`}>
            <PlayContentButton id={router.query.artistId as string} />
          </ContentControls>
          <ArtistTopTracksContainer>
            <ArtistSubHeaderText>{`Liked Songs By ${artist.name}`}</ArtistSubHeaderText>
            <TracksList url={url} total={data} disableSort />
          </ArtistTopTracksContainer>
        </ColorContext.Provider>
      </TrackConfigProvider>
    </PlayContext.Provider>
  ) : (
    <RingLoader />
  );
};

export default ArtistLikedSongs;
