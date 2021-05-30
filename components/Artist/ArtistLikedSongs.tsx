import { Album, Artist, Track } from ".prisma/client";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { MutateContext } from "../../Context";
import { useSavedMutate } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import DisplayTrack from "../Tracks/Track";
import { PlaylistColumns } from "../Tracks/TrackColumnNames";
import { ArtistSubHeaderText, ArtistTopTracksContainer } from "./style";

type Data = Track & { added_at: Date; artists: Artist[]; album: Album };

const ArtistLikedSongs = () => {
  const router = useRouter();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data } = useSWR<Artist>(() => {
    return router.query.artistId
      ? `/api/artists/${router.query.artistId}`
      : null;
  });
  const { data: tracks } = useSWR<Data[]>(() =>
    data ? `/api/artists/${data.id}/liked` : null
  );
  const { data: saved, mutate } = useSWR<boolean[]>(() => {
    return tracks
      ? `/api/me/tracks/contains?ids=${tracks.map(({ id }) => id).join(",")}`
      : null;
  });
  const mutatefuncs = useSavedMutate(mutate);

  return data ? (
    <MutateContext.Provider value={mutatefuncs}>
      <ArtistTopTracksContainer>
        <ArtistSubHeaderText>{`Liked Songs By ${data.name}`}</ArtistSubHeaderText>
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
      </ArtistTopTracksContainer>
    </MutateContext.Provider>
  ) : null;
};

export default ArtistLikedSongs;
