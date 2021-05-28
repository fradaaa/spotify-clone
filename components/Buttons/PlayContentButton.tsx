import { useAppSelectior } from "../../redux/hooks";
import { RoundIconButton } from "./style";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const PlayContentButton = () => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);

  return (
    <RoundIconButton aria-label="" width="30" height="30">
      {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
    </RoundIconButton>
  );
};

export default PlayContentButton;
