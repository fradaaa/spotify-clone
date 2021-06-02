import { useCallback } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
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

  return (
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
                  currentIndex
                )}
            </QueueSection>
            <QueueSection>
              <QueueSubHeader>Next up</QueueSubHeader>
              {queue.map(
                ({ id, title, artists, track_url, duration, album }, i) => {
                  return i < currentIndex + 1 ? null : (
                    <DisplayTrack
                      key={id}
                      id={id}
                      trackNumber={i - currentIndex + 1}
                      title={title}
                      artists={artists}
                      album={album}
                      duration={duration}
                      config={{
                        showArtists: true,
                        showImage: true,
                        showPlay: true,
                      }}
                      meta={{
                        trackURL: track_url,
                        highlight: id === nowId,
                        isSaved: saved[i],
                        index: i,
                      }}
                    />
                  );
                }
              )}
            </QueueSection>
          </>
        )}
      </QueueContainer>
    </PlayContext.Provider>
  );
};

export default Queue;
