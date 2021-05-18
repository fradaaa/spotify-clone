import { createContext } from "react";
import { NowPlayingType } from "./NowPlayingContext";

type AudioContextType = {
  currentTime: number;
  volume: number;
  playPause: ({}: NowPlayingType) => void;
  simplePlayPause: () => void;
  seekTo: (to: number) => void;
  changeVolume: (v: number) => void;
};

const AudioContext = createContext<AudioContextType>(null);
AudioContext.displayName = "Audio";

export default AudioContext;
