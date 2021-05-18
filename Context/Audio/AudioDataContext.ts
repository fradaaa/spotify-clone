import { createContext } from "react";

type AudioDataContextType = {
  currentTime: number;
  volume: number;
};

const AudioDataContext = createContext<AudioDataContextType>(null);
AudioDataContext.displayName = "Audio Data";

export default AudioDataContext;
