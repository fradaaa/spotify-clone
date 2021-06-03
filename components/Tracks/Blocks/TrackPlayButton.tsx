import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import {
  useAudioHelpers,
  usePlay,
  useTrack,
  useTrackConfig,
} from "../../../Hooks";
import { useAppDispatch, useAppSelectior } from "../../../redux/hooks";
import { setNowPlaying } from "../../../redux/slices/nowPlayingSlice";
import Equalizer from "../../Equalizer/Equalizer";
import { TrackButton, TrackNumber } from "./style";

type TrackPlayButtonProps = {
  show: boolean;
};

const TrackPlayButton = ({ show }: TrackPlayButtonProps) => {
  const trackContext = useTrack();
  const { onlyPlay } = useTrackConfig();
  const isPlaying = useAppSelectior((state) => state.nowPlaying.isPlaying);
  const dispatch = useAppDispatch();
  const { playPause } = useAudioHelpers();
  const playContext = usePlay();

  const handleClick = () => {
    playContext(index);
  };

  const handleSinglePlay = () => {
    dispatch(setNowPlaying(trackContext));
  };

  const {
    track_number,
    meta: { highlight, index, altIndex },
  } = trackContext;

  return (
    <TrackNumber>
      {show ? (
        <TrackButton
          aria-label={isPlaying ? "Pause" : "Play"}
          width="20"
          height="20"
          onClick={
            highlight ? playPause : onlyPlay ? handleSinglePlay : handleClick
          }
        >
          {highlight && isPlaying ? <BsPauseFill /> : <BsPlayFill />}
        </TrackButton>
      ) : highlight && isPlaying ? (
        <Equalizer />
      ) : (
        altIndex || track_number
      )}
    </TrackNumber>
  );
};

export default TrackPlayButton;
