import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useAudioHelpers } from "../../Hooks";
import { useAppSelectior } from "../../redux/hooks";
import Equalizer from "../Equalizer/Equalizer";
import { TrackButton, TrackNumber } from "./style";
import { ITrackPlayButtonProps } from "./types";

const TrackPlayButton = ({
  highlight,
  show,
  trackNumber,
  handleClick,
}: ITrackPlayButtonProps) => {
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const { playPause } = useAudioHelpers();

  return (
    <TrackNumber>
      {show ? (
        <TrackButton
          aria-label={isPlaying ? "Pause" : "Play"}
          width="20"
          height="20"
          onClick={highlight ? playPause : handleClick}
        >
          {highlight && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </TrackButton>
      ) : highlight && isPlaying ? (
        <Equalizer />
      ) : (
        trackNumber
      )}
    </TrackNumber>
  );
};

export default TrackPlayButton;
