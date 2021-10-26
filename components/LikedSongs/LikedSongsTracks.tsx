import React from "react";
import { ArtistSubHeaderText } from "../Artist/style";
import { FlexRow } from "../Globals";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import { PlaylistColumns } from "../Tracks/TrackRows";
import VirtualTracksList from "../Tracks/VirtualTracksList";
import { LikedSongsTracksContainer } from "./style";

const LikedSongsTracks = ({ total }: { total: number }) => {
  const url = "/api/me/tracks";

  return (
    <TrackConfigProvider showDate>
      <LikedSongsTracksContainer>
        <PlaylistColumns />
        <VirtualTracksList url={url} total={total} />
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
