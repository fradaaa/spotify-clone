import Controls from "../NowPlaying/Controls/Controls";
import PlaybackBar from "../NowPlaying/PlaybackBar/PlaybackBar";
import StateControls from "../NowPlaying/StateControls/StateControls";
import PlayerCover from "./PlayerCover";
import PlayerHeader from "./PlayerHeader";
import PlayerInfo from "./PlayerInfo";
import {
  PlayerContainer,
  PlayerControlsContainer,
  PlayerProgressContainer,
} from "./style";

const Player = ({ hide }: { hide: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target.tagName !== "A") {
      return;
    } else {
      hide();
    }
  };

  return (
    <PlayerContainer onClick={handleClick}>
      <PlayerHeader hide={hide} />
      <PlayerCover />
      <PlayerInfo />
      <PlayerProgressContainer>
        <PlaybackBar show />
      </PlayerProgressContainer>
      <PlayerControlsContainer>
        <StateControls show size="45" />
        <Controls size="45" />
      </PlayerControlsContainer>
    </PlayerContainer>
  );
};

export default Player;
