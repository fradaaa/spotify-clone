import { useCallback } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
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

  return (
    <PlayContext.Provider value={play}>
      <QueueContainer>
        <ArtistSubHeaderText as="h1">Recently Played</ArtistSubHeaderText>
        {saved && (
          <QueueSection>
            {recentlyPlayed
              .reverse()
              .map(({ id, title, artists, track_url, duration, album }, i) => {
                return (
                  <DisplayTrack
                    key={id + i}
                    id={id}
                    trackNumber={i + 1}
                    title={title}
                    artists={artists}
                    album={album}
                    duration={duration}
                    config={{
                      showArtists: true,
                      showImage: true,
                    }}
                    meta={{
                      trackURL: track_url,
                      highlight: id === nowId,
                      isSaved: saved[i],
                      index: i,
                    }}
                  />
                );
              })}
          </QueueSection>
        )}
      </QueueContainer>
    </PlayContext.Provider>
  );
};

export default RecentlyPlayed;
