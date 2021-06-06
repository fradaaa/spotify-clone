import { BiShuffle } from "react-icons/bi";
import { ImLoop, ImLoop2 } from "react-icons/im";
import { TiArrowLoop } from "react-icons/ti";
import { useAppDispatch, useAppSelectior } from "../../../redux/hooks";
import {
  toggleLoop,
  toggleShuffle,
} from "../../../redux/slices/nowPlayingSlice";
import { StateControlsContainer, StyledControlsButton } from "./style";

const StateControls = ({ show }: { show?: boolean }) => {
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
        width="25"
        height="25"
        highlight={shuffle}
      >
        <BiShuffle />
      </StyledControlsButton>
      <StyledControlsButton
        onClick={handleToggle}
        aria-label="Toggle loop"
        width="20"
        height="20"
        highlight={loop}
      >
        <ImLoop />
      </StyledControlsButton>
    </StateControlsContainer>
  );
};

export default StateControls;
