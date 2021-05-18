import { ControlsButton, ControlsContainer } from "./style";
import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackPrev,
  CgPlayTrackNext,
} from "react-icons/cg";
import { useAudio, useNowPlaying } from "../../../Hooks";

const Controls = () => {
  const { simplePlayPause } = useAudio();
  const { is_playing } = useNowPlaying();

  return (
    <ControlsContainer>
      <ControlsButton aria-label="Previous" width="35" height="35">
        <CgPlayTrackPrev />
      </ControlsButton>
      <ControlsButton
        aria-label="Play"
        width="35"
        height="35"
        onClick={simplePlayPause}
      >
        {is_playing ? <CgPlayPauseO /> : <CgPlayButtonO />}
      </ControlsButton>
      <ControlsButton aria-label="Next" width="35" height="35">
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
