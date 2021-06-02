import { BiShuffle } from "react-icons/bi";
import { useAppDispatch, useAppSelectior } from "../../../redux/hooks";
import { toggleShuffle } from "../../../redux/slices/nowPlayingSlice";
import { StateControlsContainer, StyledControlsButton } from "./style";

const StateControls = () => {
  const shuffle = useAppSelectior((state) => state.nowPlaying.shuffle);
  const loop = useAppSelectior((state) => state.nowPlaying.loop);
  const dispatch = useAppDispatch();

  const handleShuffle = () => {
    dispatch(toggleShuffle());
  };

  return (
    <StateControlsContainer>
      <StyledControlsButton
        onClick={handleShuffle}
        aria-label="Queue"
        width="25"
        height="25"
        highlight={shuffle}
      >
        <BiShuffle />
      </StyledControlsButton>
    </StateControlsContainer>
  );
};

export default StateControls;
