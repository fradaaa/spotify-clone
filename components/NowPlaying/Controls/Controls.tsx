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
      <ControlsButton aria-label="Previous" width="35" height="35">
        <CgPlayTrackPrev />
      </ControlsButton>
      <ControlsButton aria-label="Play" width="35" height="35">
        <CgPlayButtonO />
      </ControlsButton>
      <ControlsButton aria-label="Next" width="35" height="35">
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
