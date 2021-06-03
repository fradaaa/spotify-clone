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
import { renderSingleTrack } from "../Tracks/utils";
import { QueueContainer, QueueSection, QueueSubHeader } from "./style";

const Queue = () => {
  const { playContent } = useAudioHelpers();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const queue = useAppSelectior((state) => state.nowPlaying.queue);
  const contextId = useAppSelectior((state) => state.nowPlaying.context.id);
  const currentIndex = useAppSelectior((state) => state.nowPlaying.curentIndex);
  const { data: saved } = useSWR<boolean[]>(
    () =>
      queue.length > 0
        ? `/api/me/tracks/contains?ids=${queue.map(({ id }) => id)}`
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
    }),
    []
  );

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      <PlayContext.Provider value={play}>
        <QueueContainer>
          <ArtistSubHeaderText as="h1">Queue</ArtistSubHeaderText>
          {saved && (
            <>
              <QueueSection>
                <QueueSubHeader>Now playing</QueueSubHeader>
                {queue[currentIndex] &&
                  renderSingleTrack(
                    queue[currentIndex],
                    saved[currentIndex],
                    nowId!,
                    currentIndex,
                    1
                  )}
              </QueueSection>
              <QueueSection>
                <QueueSubHeader>Next up</QueueSubHeader>
                {queue.map((track, i) => {
                  return i < currentIndex + 1 ? null : (
                    <DisplayTrack
                      key={track.id}
                      track={track}
                      highlight={track.id === nowId}
                      isSaved={saved[i]}
                      index={i}
                      altIndex={i - currentIndex + 1}
                    />
                  );
                })}
              </QueueSection>
            </>
          )}
        </QueueContainer>
      </PlayContext.Provider>
    </TrackConfigContext.Provider>
  );
};

export default Queue;
