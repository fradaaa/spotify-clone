import { useAppSelectior } from "../../redux/hooks";
import { convertArtists } from "../Tracks/utils";
import {
  PlayerInfoArtist,
  PlayerInfoArtistsContainer,
  PlayerInfoContainer,
  PlayerInfoTitle,
} from "./style";

const PlayerInfo = () => {
  const { artists, title } = useAppSelectior(
    (state) => state.nowPlaying.currentTrack!
  );

  return (
    <PlayerInfoContainer>
      <PlayerInfoTitle>{title}</PlayerInfoTitle>
      <PlayerInfoArtistsContainer>
        {convertArtists(artists, PlayerInfoArtist)}
      </PlayerInfoArtistsContainer>
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;
