import { createContext } from "react";
import { NowPlayingType } from "../NowPlayingContext";

type AudioHelpersContextType = {
  playTrack: (track: NowPlayingType) => void;
  pauseTrack: () => void;
  playPause: () => void;
  changeVolume: (newVolume: number) => void;
  changeCurrentTime: (newTime: number) => void;
  isPlaying: boolean;
};

const AudioHelpersContext = createContext<AudioHelpersContextType>(null);
AudioHelpersContext.displayName = "Audio Helpers";

export default AudioHelpersContext;
