import { useCallback } from "react";
import useSWR from "swr";
import { PlayContext } from "../../Context";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import DisplayTrack from "../Tracks/Track";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { QueueContainer, QueueSection } from "./style";

const RecentlyPlayed = () => {
  const { playContent } = useAudioHelpers();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const recentlyPlayed = useAppSelectior(
    (state) => state.nowPlaying.recentlyPlayed
  );
  const { id, type } = useAppSelectior((state) => state.nowPlaying.context);
  const { data: saved } = useSWR<boolean[]>(
    () =>
      recentlyPlayed.length > 0
        ? `/api/me/tracks/contains?ids=${recentlyPlayed.map(({ id }) => id)}`
        : null,
    { revalidateOnFocus: false }
  );

  const play = useCallback(
    (index: number) => {
      if (id && type) {
        playContent(id, type, index);
      }
    },
    [playContent, id, type]
  );

  return (
    <PlayContext.Provider value={play}>
      <TrackConfigProvider onlyPlay>
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
      </TrackConfigProvider>
    </PlayContext.Provider>
  );
};

export default RecentlyPlayed;
