import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { MutateContext } from "../../Context";
import { useArtist, useSavedMutate } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "../Tracks/Track";
import { ArtistSubHeaderText, ArtistTopTracksContainer } from "./style";

type TopTrack = Track & { album: Album; artists: Artist[] };

const ArtistTopTracks = () => {
  const { id } = useArtist();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack.id);
  const { data: tracks } = useSWR<TopTrack[]>(() =>
    id ? `/api/artists/${id}/top-tracks` : null
  );
  const { data: saved, mutate } = useSWR<boolean[]>(() => {
    return tracks
      ? `/api/me/tracks/contains?ids=${tracks.map(({ id }) => id).join(",")}`
      : null;
  });
  const mutatefuncs = useSavedMutate(mutate);

  return (
    <MutateContext.Provider value={mutatefuncs}>
      <ArtistTopTracksContainer>
        {saved && (
          <>
            <ArtistSubHeaderText>Top tracks</ArtistSubHeaderText>
            {tracks?.map(
              (
                { id, title, artists, duration, track_url, album, play_count },
                i
              ) => (
                <DisplayTrack
                  key={id}
                  id={id}
                  trackNumber={i + 1}
                  title={title}
                  artists={artists}
                  album={album}
                  duration={duration}
                  showImage
                  playCount={play_count}
                  meta={{
                    trackURL: track_url,
                    highlight: id === nowId,
                    isSaved: saved[i],
                    index: i,
                  }}
                />
              )
            )}
          </>
        )}
      </ArtistTopTracksContainer>
    </MutateContext.Provider>
  );
};

export default ArtistTopTracks;
