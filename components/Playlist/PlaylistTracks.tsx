import { useMemo, useRef, useState } from "react";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { usePagination, usePlaylist } from "../../Hooks";
import { PlaylistColumns } from "../Tracks/TrackColumnNames";
import TracksPage from "../Tracks/TracksPage";
import { PlaylistTracksContainer } from "./style";

const PlaylistTracks = () => {
  const node = useRef<HTMLDivElement>(null);
  const { id, total } = usePlaylist();
  const [cnt, setCnt] = useState(1);

  const tracks = [];
  for (let i = 1; i <= cnt; i++) {
    tracks.push(
      <TracksPage
        key={i}
        page={i}
        url={`/api/playlists/${id}/tracks`}
        altIndex
        revalidate
      />
    );
  }

  const trackConfig = useMemo<TrackConfigContextType>(
    () => ({
      showArtists: true,
      showImage: true,
      showPlayCount: false,
      showPlay: true,
      showDate: true,
    }),
    []
  );

  usePagination({ targetRef: node, callback: () => setCnt(cnt + 1) });

  return (
    <TrackConfigContext.Provider value={trackConfig}>
      <PlaylistTracksContainer>
        <PlaylistColumns />
        {tracks}
        {total > tracks.length * 50 && <div ref={node}></div>}
      </PlaylistTracksContainer>
    </TrackConfigContext.Provider>
  );
};

export default PlaylistTracks;
