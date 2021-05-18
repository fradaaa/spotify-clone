import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackNext,
  CgPlayTrackPrev,
} from "react-icons/cg";
import { useAudioHelpers } from "../../../Hooks";
import { ControlsButton, ControlsContainer } from "./style";

const Controls = () => {
  const { isPlaying, playPause } = useAudioHelpers();

  return (
    <ControlsContainer>
      <ControlsButton aria-label="Previous" width="35" height="35">
        <CgPlayTrackPrev />
      </ControlsButton>
      <ControlsButton
        aria-label="Play"
        width="35"
        height="35"
        onClick={playPause}
      >
        {isPlaying ? <CgPlayPauseO /> : <CgPlayButtonO />}
      </ControlsButton>
      <ControlsButton aria-label="Next" width="35" height="35">
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
