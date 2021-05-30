import useSWR from "swr";
import { MutateContext } from "../../Context";
import { useSavedMutate } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { CurrentTrack } from "../../redux/slices/nowPlayingSlice";
import { ArtistSubHeaderText } from "../Artist/style";
import DisplayTrack from "../Tracks/Track";
import { renderSingleTrack } from "../Tracks/utils";
import { QueueContainer, QueueSection, QueueSubHeader } from "./style";

const Queue = () => {
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const queue = useAppSelectior((state) => state.nowPlaying.queue);
  const currentIndex = useAppSelectior((state) => state.nowPlaying.curentIndex);
  const { data: saved, mutate } = useSWR<boolean[]>(() =>
    queue.length > 0
      ? `/api/me/tracks/contains?ids=${queue.map(({ id }) => id)}`
      : null
  );
  const mutatefuncs = useSavedMutate(mutate);

  return (
    <MutateContext.Provider value={mutatefuncs}>
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
                      showArtists
                      showImage
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
    </MutateContext.Provider>
  );
};

export default Queue;
