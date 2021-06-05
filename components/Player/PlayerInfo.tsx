import { useAppSelectior } from "../../redux/hooks";
import { convertArtists } from "../Tracks/utils";
import {
  PlayerInfoArtist,
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
      {convertArtists(artists, PlayerInfoArtist)}
    </PlayerInfoContainer>
  );
};

export default PlayerInfo;
