import { useCallback, useEffect, useMemo, useRef } from "react";
import { AudioHelpersContext } from "../../Context";
import { useAppDispatch, useAppSelectior } from "../../redux/hooks";
import {
  CurrentTrack,
  muteUnmute,
  pause,
  play,
  setNowPlaying,
  toggleIsPlaying,
  updateCurrentTime,
  updateVolume,
} from "../../redux/slices/nowPlayingSlice";

const AudioProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const volume = useAppSelectior((state) => state.nowPlaying.volume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    audio.current.volume = volume / 100;
  }, []);

  const playTrack = useCallback((track: CurrentTrack) => {
    const { track_url } = track;

    if (audio.current.src !== track_url) {
      audio.current.src = track_url;
      dispatch(setNowPlaying(track));
    }

    audio.current.play();
    dispatch(play());
  }, []);

  const pauseTrack = useCallback(() => {
    audio.current.pause();
    dispatch(pause());
  }, []);

  const playPause = useCallback(() => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    dispatch(toggleIsPlaying());
  }, []);

  const changeVolume = useCallback((newVolume: number /* percent */) => {
    if (newVolume < 0) {
      audio.current.volume = 0;
    } else if (newVolume > 100) {
      audio.current.volume = 1;
    } else {
      audio.current.volume = newVolume / 100;
    }
  }, []);

  const changeCurrentTime = useCallback((to: number /* percent */) => {
    audio.current.currentTime = (audio.current.duration / 100) * to;
  }, []);

  const toggleMute = useCallback(() => {
    audio.current.muted = !audio.current.muted;
    dispatch(muteUnmute());
  }, []);

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch(updateCurrentTime(node.currentTime));
    },
    []
  );

  const handleVolumeChange = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch(updateVolume(node.volume));
    },
    []
  );

  const helpers = useMemo(
    () => ({
      playTrack,
      pauseTrack,
      playPause,
      changeVolume,
      changeCurrentTime,
      toggleMute,
    }),
    []
  );

  return (
    <AudioHelpersContext.Provider value={helpers}>
      <audio
        onTimeUpdate={handleTimeUpdate}
        onVolumeChange={handleVolumeChange}
        ref={audio}
      />
      {children}
    </AudioHelpersContext.Provider>
  );
};

export default AudioProvider;
