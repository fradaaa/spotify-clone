import { useAppSelectior } from "../../redux/hooks";
import { RoundIconButton } from "./style";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useAudioHelpers } from "../../Hooks";

const PlayContentButton = ({
  playC,
  id,
}: {
  playC: () => void;
  id: string;
}) => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const contextId = useAppSelectior((state) => state.nowPlaying.context.id);
  const { playPause } = useAudioHelpers();

  return (
    <RoundIconButton
      onClick={id === contextId ? playPause : playC}
      aria-label=""
      width="30"
      height="30"
    >
      {id === contextId && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
    </RoundIconButton>
  );
};

export default PlayContentButton;
