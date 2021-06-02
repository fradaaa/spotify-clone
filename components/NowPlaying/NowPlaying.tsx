import { useAppSelectior } from "../../redux/hooks";
import Controls from "./Controls/Controls";
import CurrentSong from "./CurrentSong/CurrentSong";
import ExtraControls from "./ExtraControls/ExtraControls";
import PlaybackBar from "./PlaybackBar/PlaybackBar";
import StateControls from "./StateControls/StateControls";
import { NowPlayingContainer } from "./style";

const NowPlaying = () => {
  const currentTrack = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );

  return (
    <NowPlayingContainer>
      {currentTrack ? (
        <>
          <CurrentSong />
          <Controls />
          <PlaybackBar />
          <StateControls />
          <ExtraControls />
        </>
      ) : null}
    </NowPlayingContainer>
  );
};

export default NowPlaying;
