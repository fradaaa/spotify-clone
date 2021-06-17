import React, { useRef, useState } from "react";
import { usePagination } from "../../Hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import { FlexRow } from "../Globals";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { PlaylistColumns } from "../Tracks/TrackRows";
import TracksPage from "../Tracks/TracksPage";
import { LikedSongsTracksContainer } from "./style";

const LikedSongsTracks = ({ total }: { total: number }) => {
  const [cnt, setCnt] = useState(1);
  const node = useRef<HTMLDivElement>(null);

  const tracks = [];
  for (let i = 1; i <= cnt; i++) {
    tracks.push(<TracksPage key={i} page={i} url="/api/me/tracks" altIndex />);
  }

  usePagination({ targetRef: node, callback: () => setCnt(cnt + 1) });

  return (
    <TrackConfigProvider showDate>
      <LikedSongsTracksContainer>
        <PlaylistColumns />
        {tracks}
        {total > tracks.length * 50 && <div ref={node}></div>}
        {total === 0 && (
          <FlexRow style={{ justifyContent: "center", height: "100%" }}>
            <ArtistSubHeaderText>
              Like a song to see it here
            </ArtistSubHeaderText>
          </FlexRow>
        )}
      </LikedSongsTracksContainer>
    </TrackConfigProvider>
  );
};

export default LikedSongsTracks;
