import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useAudioHelpers, usePlay } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import { RoundIconButton } from "./style";

type PlayContentProps = {
  id: string;
};

const PlayContentButton = ({ id }: PlayContentProps) => {
  const playContext = usePlay();
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const contextId = useAppSelectior((state) => state.nowPlaying.context.id);
  const { playPause } = useAudioHelpers();

  const handleClick = () => {
    playContext(0);
  };

  return (
    <RoundIconButton
      onClick={id === contextId ? playPause : handleClick}
      aria-label="Play content"
      width="30"
      height="30"
    >
      {id === contextId && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
    </RoundIconButton>
  );
};

export default PlayContentButton;
