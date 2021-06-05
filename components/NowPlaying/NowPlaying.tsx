import { AiOutlineUp } from "react-icons/ai";
import { useShow } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import Player from "../Player/Player";
import { PlayerButton } from "../Player/style";
import Controls from "./Controls/Controls";
import CurrentSong from "./CurrentSong/CurrentSong";
import ExtraControls from "./ExtraControls/ExtraControls";
import PlaybackBar from "./PlaybackBar/PlaybackBar";
import StateControls from "./StateControls/StateControls";
import { NowPlayingContainer, NowPlayingText, ShowPlayer } from "./style";

const NowPlaying = () => {
  const { show, enableShow, disableShow } = useShow();
  const currentTrack = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );

  return (
    <>
      <NowPlayingContainer>
        {currentTrack ? (
          <>
            <CurrentSong />
            <Controls size="35" />
            <PlaybackBar />
            <StateControls />
            <ExtraControls />
            <ShowPlayer>
              <PlayerButton
                onClick={enableShow}
                aria-label="Show player"
                width="35"
                height="35"
              >
                <AiOutlineUp />
              </PlayerButton>
            </ShowPlayer>
          </>
        ) : (
          <NowPlayingText>Play something to see the player</NowPlayingText>
        )}
      </NowPlayingContainer>
      {show && <Player hide={disableShow} />}
    </>
  );
};

export default NowPlaying;
