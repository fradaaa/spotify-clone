import React from "react";
import { ArtistSubHeaderText } from "../Artist/style";
import { FlexRow } from "../Globals";
import TrackConfigProvider from "../Tracks/TrackConfigProvider";
import TracksList from "../TracksList/TracksList";

const LikedSongsTracks = ({ total }: { total: number }) => {
  const url = "/api/me/tracks";

  return (
    <TrackConfigProvider showDate>
      <TracksList url={url} total={total} />
      {total === 0 && (
        <FlexRow style={{ justifyContent: "center", height: "100%" }}>
          <ArtistSubHeaderText>Like a song to see it here</ArtistSubHeaderText>
        </FlexRow>
      )}
    </TrackConfigProvider>
  );
};

export default LikedSongsTracks;
