import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  AudioDataContext,
  AudioHelpersContext,
  NowPlayingContext,
} from "../../Context";
import { NowPlayingType } from "../../Context/NowPlayingContext";
import { audioReducer } from "../../Reducers";
import { audioInitialState } from "../../Reducers/audioReducer";

const AudioProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [state, dispatch] = useReducer(audioReducer, audioInitialState);
  const { nowPlaying, currentTime, volume, isPlaying } = state;

  useEffect(() => {
    audio.current.volume = volume / 100;
  }, []);

  const playTrack = useCallback((track: NowPlayingType) => {
    const { track_url } = track;

    if (audio.current.src !== track_url) {
      audio.current.src = track_url;
      dispatch({ type: "set_now_playing", payload: track });
    }

    audio.current.play();
    dispatch({ type: "play" });
  }, []);

  const pauseTrack = useCallback(() => {
    audio.current.pause();
    dispatch({ type: "pause" });
  }, []);

  const playPause = useCallback(() => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    dispatch({ type: "toggle_is_playing" });
  }, []);

  const changeVolume = useCallback((newVolume: number /* percent */) => {
    audio.current.volume = newVolume / 100;
  }, []);

  const changeCurrentTime = useCallback((to: number /* percent */) => {
    audio.current.currentTime = (audio.current.duration / 100) * to;
  }, []);

  const updateCurrentTime = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch({ type: "change_current_time", payload: node.currentTime });
    },
    []
  );

  const updateVolume = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch({ type: "change_volume", payload: node.volume });
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
      isPlaying,
    }),
    [isPlaying]
  );

  return (
    <AudioHelpersContext.Provider value={helpers}>
      <NowPlayingContext.Provider value={nowPlaying}>
        <AudioDataContext.Provider value={{ currentTime, volume }}>
          <audio
            onTimeUpdate={updateCurrentTime}
            onVolumeChange={updateVolume}
            ref={audio}
          />
          {children}
        </AudioDataContext.Provider>
      </NowPlayingContext.Provider>
    </AudioHelpersContext.Provider>
  );
};

export default AudioProvider;
