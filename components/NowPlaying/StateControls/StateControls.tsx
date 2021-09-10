import { BiShuffle } from "react-icons/bi";
import { TiArrowLoop } from "react-icons/ti";
import { useAppDispatch, useAppSelectior } from "../../../redux/hooks";
import {
  toggleLoop,
  toggleShuffle,
} from "../../../redux/slices/nowPlayingSlice";
import { StateControlsContainer, StyledControlsButton } from "./style";

type StateControlsProps = {
  size?: string;
  show?: boolean;
};

const StateControls = ({ size = "25", show }: StateControlsProps) => {
  const shuffle = useAppSelectior((state) => state.nowPlaying.shuffle);
  const loop = useAppSelectior((state) => state.nowPlaying.loop);
  const dispatch = useAppDispatch();

  const handleShuffle = () => {
    dispatch(toggleShuffle());
  };

  const handleToggle = () => {
    dispatch(toggleLoop());
  };

  return (
    <StateControlsContainer show={show}>
      <StyledControlsButton
        onClick={handleShuffle}
        aria-label="Queue"
        width={size}
        height={size}
        highlight={shuffle}
      >
        <BiShuffle />
      </StyledControlsButton>
      <StyledControlsButton
        onClick={handleToggle}
        aria-label="Toggle loop"
        width={size}
        height={size}
        highlight={loop}
      >
        <TiArrowLoop />
      </StyledControlsButton>
    </StateControlsContainer>
  );
};

export default StateControls;
