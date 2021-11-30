import useSWR from "swr";
import { useAlbum } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { RingLoader } from "../Globals";
import DisplayTrack from "../Tracks/Track";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { AlbumColumns } from "../Tracks/TrackRows";
import AlbumControls from "./AlbumControls";
import { AlbumTracksContainer } from "./style";

const AlbumTracks = () => {
  const {
    album: { total_tracks },
    albumTracks,
  } = useAlbum();
  const nowId = useAppSelectior((state) => state.nowPlaying.currentTrack?.id);
  const { data: saved } = useSWR<boolean[]>(
    () => {
      return albumTracks
        ? `/api/me/tracks/contains?ids=${albumTracks
            .map(({ id }) => id)
            .join(",")}`
        : null;
    },
    { revalidateOnFocus: false }
  );

  return (
    <TrackConfigProvider showPlayCount>
      <AlbumControls />
      <AlbumTracksContainer>
        <AlbumColumns />
        <div style={{ minHeight: `${55 * total_tracks}px` }}>
          {saved ? (
            albumTracks.map((track, i) => (
              <DisplayTrack
                key={track.id}
                track={track}
                highlight={track.id === nowId}
                index={i}
                isSaved={saved[i]}
                altIndex={i + 1}
              />
            ))
          ) : (
            <RingLoader />
          )}
        </div>
      </AlbumTracksContainer>
    </TrackConfigProvider>
  );
};

export default AlbumTracks;
