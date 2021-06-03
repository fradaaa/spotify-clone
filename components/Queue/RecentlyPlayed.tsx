import { useCallback, useMemo } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import DisplayTrack from "../Tracks/Track";
import { QueueContainer, QueueSection } from "./style";

const RecentlyPlayed = () => {
  const { playContent } = useAudioHelpers();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const recentlyPlayed = useAppSelectior(
    (state) => state.nowPlaying.recentlyPlayed
  );
  const contextId = useAppSelectior((state) => state.nowPlaying.context.id);
  const { data: saved } = useSWR<boolean[]>(
    () =>
      recentlyPlayed.length > 0
        ? `/api/me/tracks/contains?ids=${recentlyPlayed.map(({ id }) => id)}`
        : null,
    { revalidateOnFocus: false }
  );

  const play = useCallback(
    (index: number) => {
      if (contextId) {
        playContent(contextId, "", index);
      }
    },
    [playContent, contextId]
  );

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: false,
      showPlay: true,
      showDate: false,
      onlyPlay: true,
    }),
    []
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      <PlayContext.Provider value={play}>
        <QueueContainer>
          <ArtistSubHeaderText as="h1">Recently Played</ArtistSubHeaderText>
          {saved && (
            <QueueSection>
              {recentlyPlayed.map((track, i) => {
                return i > 49 ? null : (
                  <DisplayTrack
                    key={track.id + i}
                    track={track}
                    highlight={track.id === nowId}
                    isSaved={saved[i]}
                    index={i}
                    altIndex={i + 1}
                  />
                );
              })}
            </QueueSection>
          )}
        </QueueContainer>
      </PlayContext.Provider>
    </TrackConfigContext.Provider>
  );
};

export default RecentlyPlayed;
