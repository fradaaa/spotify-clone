import { useCallback } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import DisplayTrack from "../Tracks/Track";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { renderSingleTrack } from "../Tracks/utils";
import { QueueContainer, QueueSection, QueueSubHeader } from "./style";

const Queue = () => {
  const { playContent } = useAudioHelpers();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const queue = useAppSelectior((state) => state.nowPlaying.queue);
  const { id } = useAppSelectior((state) => state.nowPlaying.context);
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
      if (id) {
        playContent(id, "queue", index);
      }
    },
    [playContent, id]
  );

  return (
    <PlayContext.Provider value={play}>
      <TrackConfigProvider>
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
              {currentIndex + 1 === queue.length ? null : (
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
              )}
            </>
          )}
        </QueueContainer>
      </TrackConfigProvider>
    </PlayContext.Provider>
  );
};

export default Queue;
