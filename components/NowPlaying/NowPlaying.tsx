import Controls from "./Controls/Controls";
import CurrentSong from "./CurrentSong/CurrentSong";
import ExtraControls from "./ExtraControls/ExtraControls";
import PlaybackBar from "./PlaybackBar/PlaybackBar";
import { NowPlayingContainer } from "./style";

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <CurrentSong />
      <Controls />
      <PlaybackBar />
      <ExtraControls />
    </NowPlayingContainer>
  );
};

export default NowPlaying;
