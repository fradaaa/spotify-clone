import React, { useState } from "react";
import { PlaylistColumns } from "../Tracks/TrackColumnNames";
import TracksPage from "../Tracks/TracksPage";
import { LikedSongsTracksContainer } from "./style";

const LikedSongsTracks = ({ total }: { total: number }) => {
  const [cnt, setCnt] = useState(1);

  const tracks = [];
  for (let i = 1; i <= cnt; i++) {
    tracks.push(
      <TracksPage
        key={i}
        page={i}
        url="/api/me/tracks"
        config={{
          showArtists: true,
          showImage: true,
          showPlay: true,
        }}
      />
    );
  }

  return (
    <LikedSongsTracksContainer>
      <PlaylistColumns />
      {tracks}
      {total > tracks.length * 10 && (
        <button onClick={() => setCnt(cnt + 1)}>Load More</button>
      )}
    </LikedSongsTracksContainer>
  );
};

export default LikedSongsTracks;
