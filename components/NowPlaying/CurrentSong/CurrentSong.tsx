import CurrentSongCover from "./CurrentSongCover";
import CurrentSongInfo from "./CurrentSongInfo";
import { CurrentSongContainer } from "./style";

const CurrentSong = () => {
  return (
    <CurrentSongContainer>
      <CurrentSongCover />
      <CurrentSongInfo />
    </CurrentSongContainer>
  );
};

export default CurrentSong;
