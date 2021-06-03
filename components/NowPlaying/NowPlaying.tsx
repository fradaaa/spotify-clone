import { useAppSelectior } from "../../redux/hooks";
import Controls from "./Controls/Controls";
import CurrentSong from "./CurrentSong/CurrentSong";
import ExtraControls from "./ExtraControls/ExtraControls";
import PlaybackBar from "./PlaybackBar/PlaybackBar";
import StateControls from "./StateControls/StateControls";
import { NowPlayingContainer, NowPlayingText } from "./style";

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
      ) : (
        <NowPlayingText>Play something to see the player</NowPlayingText>
      )}
    </NowPlayingContainer>
  );
};

export default NowPlaying;
