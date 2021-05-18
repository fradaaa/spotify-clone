import { useNowPlaying } from "../../../Hooks";
import CurrentSongCover from "./CurrentSongCover";
import CurrentSongInfo from "./CurrentSongInfo";
import { CurrentSongContainer } from "./style";

const CurrentSong = () => {
  const { image, title, artists } = useNowPlaying();

  return (
    <CurrentSongContainer>
      <CurrentSongCover image={image} />
      <CurrentSongInfo title={title} artists={artists} />
    </CurrentSongContainer>
  );
};

export default CurrentSong;
