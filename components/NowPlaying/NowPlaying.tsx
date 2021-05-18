import { useNowPlaying } from "../../Hooks";
import Controls from "./Controls/Controls";
import CurrentSong from "./CurrentSong/CurrentSong";
import ExtraControls from "./ExtraControls/ExtraControls";
import PlaybackBar from "./PlaybackBar/PlaybackBar";
import { NowPlayingContainer } from "./style";

const NowPlaying = () => {
  const nowPlaying = useNowPlaying();

  return (
    <NowPlayingContainer>
      {nowPlaying ? (
        <>
          <CurrentSong />
          <Controls />
          <PlaybackBar />
          <ExtraControls />
        </>
      ) : null}
    </NowPlayingContainer>
  );
};

export default NowPlaying;
