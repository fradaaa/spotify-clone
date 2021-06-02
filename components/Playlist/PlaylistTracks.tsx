import { useState } from "react";
import { usePlaylist } from "../../Hooks";
import { PlaylistColumns } from "../Tracks/TrackColumnNames";
import TracksPage from "../Tracks/TracksPage";
import { PlaylistTracksContainer } from "./style";

const PlaylistTracks = () => {
  const { id, total } = usePlaylist();
  const [cnt, setCnt] = useState(1);

  const tracks = [];
  for (let i = 1; i <= cnt; i++) {
    tracks.push(
      <TracksPage
        key={i}
        page={i}
        url={`/api/playlists/${id}/tracks`}
        config={{
          showArtists: true,
          showImage: true,
          showPlay: true,
        }}
      />
    );
  }

  return (
    <PlaylistTracksContainer>
      <PlaylistColumns />
      {tracks}
      {total > tracks.length * 10 && (
        <button onClick={() => setCnt(cnt + 1)}>Load More</button>
      )}
    </PlaylistTracksContainer>
  );
};

export default PlaylistTracks;
