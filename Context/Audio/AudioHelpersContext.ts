import { createContext } from "react";

type AudioHelpersContextType = {
  playTrack: (track_url: string) => void;
  playPause: () => void;
  changeVolume: (newVolume: number) => void;
  changeCurrentTime: (newTime: number) => void;
};

const AudioHelpersContext = createContext<AudioHelpersContextType>(null);
AudioHelpersContext.displayName = "Audio Helpers";

export default AudioHelpersContext;
