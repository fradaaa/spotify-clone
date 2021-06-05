import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackNext,
  CgPlayTrackPrev,
} from "react-icons/cg";
import { useAudioHelpers, useQueue } from "../../../Hooks";
import { useAppSelectior } from "../../../redux/hooks";
import { ControlsButton, ControlsContainer } from "./style";

const Controls = ({ size }: { size: string }) => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const { playPause } = useAudioHelpers();
  const { prevTrack, nextTrack } = useQueue();

  return (
    <ControlsContainer>
      <ControlsButton
        aria-label="Previous"
        width={size}
        height={size}
        onClick={prevTrack}
      >
        <CgPlayTrackPrev />
      </ControlsButton>
      <ControlsButton
        aria-label="Play"
        width={size}
        height={size}
        onClick={playPause}
      >
        {isPlaying ? <CgPlayPauseO /> : <CgPlayButtonO />}
      </ControlsButton>
      <ControlsButton
        aria-label="Next"
        width={size}
        height={size}
        onClick={nextTrack}
      >
        <CgPlayTrackNext />
      </ControlsButton>
    </ControlsContainer>
  );
};

export default Controls;
