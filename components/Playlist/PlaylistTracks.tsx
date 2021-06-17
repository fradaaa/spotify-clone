import { useRef, useState } from "react";
import { usePagination, usePlaylist } from "../../Hooks";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { PlaylistColumns } from "../Tracks/TrackRows";
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

  usePagination({ targetRef: node, callback: () => setCnt(cnt + 1) });

  return (
    <TrackConfigProvider showDate>
      <PlaylistTracksContainer>
        <PlaylistColumns />
        {tracks}
        {total > tracks.length * 50 && <div ref={node}></div>}
      </PlaylistTracksContainer>
    </TrackConfigProvider>
  );
};

export default PlaylistTracks;
