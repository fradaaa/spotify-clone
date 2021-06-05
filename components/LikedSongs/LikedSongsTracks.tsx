import React, { useMemo, useRef, useState } from "react";
import TrackConfigContext, {
  TrackConfigContextType,
} from "../../Context/TrackConfigContext";
import { usePagination } from "../../Hooks";
import { ArtistSubHeaderText } from "../Artist/style";
import { FlexRow } from "../Globals";
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
    </TrackConfigContext.Provider>
  );
};

export default LikedSongsTracks;
