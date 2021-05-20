import { createContext } from "react";
import { CurrentTrack } from "../redux/slices/nowPlayingSlice";

type AudioHelpersContextType = {
  playTrack: (track: CurrentTrack) => void;
  pauseTrack: () => void;
  playPause: () => void;
  changeVolume: (newVolume: number) => void;
  changeCurrentTime: (newTime: number) => void;
  toggleMute: () => void;
};

const AudioHelpersContext = createContext<AudioHelpersContextType>(null);
AudioHelpersContext.displayName = "Audio Helpers";

export default AudioHelpersContext;
