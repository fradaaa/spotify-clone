import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useAppSelectior } from "../../redux/hooks";
import Equalizer from "../Equalizer/Equalizer";
import { TrackButton, TrackNumber } from "./style";
import { ITrackPlayButtonProps } from "./types";

const TrackPlayButton = ({
  id,
  nowId,
  show,
  trackNumber,
  handleClick,
  pauseTrack,
}: ITrackPlayButtonProps) => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);

  return (
    <TrackNumber>
      {show ? (
        <TrackButton
          aria-label={isPlaying ? "Pause" : "Play"}
          width="20"
          height="20"
          onClick={id === nowId && isPlaying ? pauseTrack : handleClick}
        >
          {id === nowId && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </TrackButton>
      ) : id === nowId && isPlaying ? (
        <Equalizer />
      ) : (
        trackNumber
      )}
    </TrackNumber>
  );
};

export default TrackPlayButton;
