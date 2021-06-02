import { createContext } from "react";
import { CurrentTrack } from "../redux/slices/nowPlayingSlice";

type AudioHelpersContextType = {
  playContent: (
    contextId: string,
    type: string,
    index: number
  ) => Promise<void>;
  playPause: () => void;
  changeVolume: (newVolume: number) => void;
  changeCurrentTime: (newTime: number) => void;
  toggleMute: () => void;
};

const AudioHelpersContext = createContext<AudioHelpersContextType | null>(null);
AudioHelpersContext.displayName = "Audio Helpers";

export default AudioHelpersContext;
