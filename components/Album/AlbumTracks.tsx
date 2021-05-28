import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { MutateContext } from "../../Context";
import { useAlbum, useSavedMutate } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "../Tracks/Track";
import { AlbumColumns } from "../Tracks/TrackColumnNames";
import { AlbumTracksContainer } from "./style";

type AlbumTrack = Track & { artists: Artist[]; album: Album };

const AlbumTracks = () => {
  const { id } = useAlbum();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack.id);
  const { data: tracks } = useSWR<AlbumTrack[]>(() =>
    id ? `/api/albums/${id}/tracks` : null
  );
  const { data: saved, mutate } = useSWR<boolean[]>(() =>
    tracks
      ? `/api/me/tracks/contains?ids=${tracks.map(({ id }) => id).join(",")}`
      : null
  );
  const mutatefuncs = useSavedMutate(mutate);

  return (
    <MutateContext.Provider value={mutatefuncs}>
      <AlbumTracksContainer>
        {saved && (
          <>
            <AlbumColumns />
            {tracks?.map(
              (
                {
                  id,
                  title,
                  artists,
                  track_url,
                  track_number,
                  play_count,
                  duration,
                  album,
                },
                i
              ) => (
                <DisplayTrack
                  key={id}
                  id={id}
                  trackNumber={track_number}
                  title={title}
                  artists={artists}
                  album={album}
                  playCount={play_count}
                  duration={duration}
                  showArtists
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
      </AlbumTracksContainer>
    </MutateContext.Provider>
  );
};

export default AlbumTracks;
