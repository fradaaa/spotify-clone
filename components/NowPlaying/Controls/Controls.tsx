import { ControlsButton, ControlsContainer } from "./style";
import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackPrev,
  CgPlayTrackNext,
} from "react-icons/cg";

const Controls = () => {
  return (
    <ControlsContainer>
      <ControlsButton aria-label="Previous" width="50" height="50">
        <CgPlayTrackPrev />
      </ControlsButton>
      <ControlsButton aria-label="Play" width="50" height="50">
        <CgPlayButtonO />
      </ControlsButton>
      <ControlsButton aria-label="Next" width="50" height="50">
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
