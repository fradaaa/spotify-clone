import { useCallback, useEffect, useRef, useState } from "react";
import { AudioContext } from "../../Context";

const AudioProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  const [volume, setVolume] = useState(20); // in percent

  useEffect(() => {
    audio.current.volume = volume / 100;
  }, []);

  const playPause = useCallback((audioURL: string) => {
    if (audio.current.paused) {
      if (audio.current.src !== audioURL) {
        audio.current.src = audioURL;
      }
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, []);

  const seekTo = useCallback((to: number /* percent */) => {
    audio.current.currentTime = (audio.current.duration / 100) * to;
  }, []);

  const changeVolume = useCallback((newVolume: number /* percent */) => {
    audio.current.volume = newVolume / 100;
  }, []);

  const updateCurrentTime = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const node = e.currentTarget;
    setCurrentTime(node.currentTime);
  };

  const updateVolume = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const node = e.currentTarget;
    setVolume(node.volume * 100);
  };

  return (
    <AudioContext.Provider
      value={{
        currentTime,
        volume,
        playPause,
        seekTo,
        changeVolume,
      }}
    >
      <audio
        onTimeUpdate={updateCurrentTime}
        onVolumeChange={updateVolume}
        ref={audio}
      />
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
