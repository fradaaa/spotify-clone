import { useAppSelectior } from "../../../redux/hooks";
import CurrentSongCover from "./CurrentSongCover";
import CurrentSongInfo from "./CurrentSongInfo";
import { CurrentSongContainer } from "./style";

const CurrentSong = () => {
  const currentTrack = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );
  const {
    album: { image },
    title,
    artists,
  } = currentTrack!;

  return (
    <CurrentSongContainer>
      <CurrentSongCover image={image} />
      <CurrentSongInfo title={title} artists={artists} />
    </CurrentSongContainer>
  );
};

export default CurrentSong;
