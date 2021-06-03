import Image from "next/image";
import { useTrack, useTrackConfig } from "../../../Hooks";
import { convertArtists } from "../utils";
import {
  TrackArtistName,
  TrackCoverContainer,
  TrackTitleContainer,
  TrackTitleText,
} from "./style";

const TrackTitle = () => {
  const {
    artists,
    album,
    title,
    meta: { highlight },
  } = useTrack();
  const { showArtists, showImage } = useTrackConfig();

  return (
    <TrackTitleContainer>
      {showImage && (
        <TrackCoverContainer>
          <Image src={album.image} alt="" width={40} height={40} />
        </TrackCoverContainer>
      )}
      <div>
        <TrackTitleText highlight={highlight}>{title}</TrackTitleText>
        {showArtists && convertArtists(artists, TrackArtistName)}
      </div>
    </TrackTitleContainer>
  );
};

export default TrackTitle;
