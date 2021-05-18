import { useCallback, useEffect, useRef, useState } from "react";
import { AudioContext, NowPlayingContext } from "../../Context";
import { NowPlayingType } from "../../Context/NowPlayingContext";

const AudioProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingType>(null);
  const [currentTime, setCurrentTime] = useState(0); // in seconds
  const [volume, setVolume] = useState(20); // in percent

  useEffect(() => {
    audio.current.volume = volume / 100;
  }, []);

  const playPause = useCallback((track: NowPlayingType) => {
    const { track_url } = track;
    if (audio.current.paused) {
      if (audio.current.src !== track_url) {
        audio.current.src = track_url;
        setNowPlaying({ ...track, is_playing: true });
      }
      audio.current.play();
    } else {
      audio.current.pause();
      setNowPlaying((prevTrack) => ({ ...prevTrack, is_playing: false }));
    }
  }, []);

  const simplePlayPause = useCallback(() => {
    if (audio.current.paused) {
      audio.current.play();
      setNowPlaying((prevTrack) => ({ ...prevTrack, is_playing: true }));
    } else {
      audio.current.pause();
      setNowPlaying((prevTrack) => ({ ...prevTrack, is_playing: false }));
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
        simplePlayPause,
        seekTo,
        changeVolume,
      }}
    >
      <NowPlayingContext.Provider value={nowPlaying}>
        <audio
          onTimeUpdate={updateCurrentTime}
          onVolumeChange={updateVolume}
          ref={audio}
        />
        {children}
      </NowPlayingContext.Provider>
    </AudioContext.Provider>
  );
};

export default AudioProvider;
