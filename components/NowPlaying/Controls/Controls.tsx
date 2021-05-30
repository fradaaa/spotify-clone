import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackNext,
  CgPlayTrackPrev,
} from "react-icons/cg";
import { useAudioHelpers, useQueue } from "../../../Hooks";
import { useAppSelectior } from "../../../redux/hooks";
import { ControlsButton, ControlsContainer } from "./style";

const Controls = () => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const { playPause } = useAudioHelpers();
  const { prevTrack, nextTrack } = useQueue();

  return (
    <ControlsContainer>
      <ControlsButton
        aria-label="Previous"
        width="35"
        height="35"
        onClick={prevTrack}
      >
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
      <ControlsButton
        aria-label="Next"
        width="35"
        height="35"
        onClick={nextTrack}
      >
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
