import { Album, Artist, Track } from ".prisma/client";
import useSWR from "swr";
import { MutateContext } from "../../Context";
import { usePlaylist, useSavedMutate } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "../Tracks/Track";
import { PlaylistColumns } from "../Tracks/TrackColumnNames";
import { PlaylistTracksContainer } from "./style";

type Data = Track & { artists: Artist[]; album: Album; added_at: Date };

const PlaylistTracks = () => {
  const { id } = usePlaylist();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data: tracks } = useSWR<Data[]>(() =>
    id ? `/api/playlists/${id}/tracks` : null
  );
  const { data: saved, mutate } = useSWR<boolean[]>(() => {
    return tracks
      ? `/api/me/tracks/contains?ids=${tracks.map(({ id }) => id).join(",")}`
      : null;
  });
  const mutatefuncs = useSavedMutate(mutate);

  return (
    <MutateContext.Provider value={mutatefuncs}>
      <PlaylistTracksContainer>
        {saved && (
          <>
            <PlaylistColumns />
            {tracks?.map(
              (
                { id, title, artists, duration, track_url, album, added_at },
                i
              ) => (
                <DisplayTrack
                  key={id}
                  id={id}
                  trackNumber={i + 1}
                  title={title}
                  artists={artists}
                  album={album}
                  dateAdded={added_at}
                  duration={duration}
                  showImage
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
      </PlaylistTracksContainer>
    </MutateContext.Provider>
  );
};

export default PlaylistTracks;
