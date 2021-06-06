import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { AudioHelpersContext, QueueContext } from "../../Context";
import { useAppDispatch, useAppSelectior } from "../../redux/hooks";
import {
  addToRecent,
  fetchContext,
  muteUnmute,
  pause,
  play,
  playShuffle,
  setIndex,
  setNowPlaying,
  toggleIsPlaying,
  updateCurrentTime,
  updateVolume,
} from "../../redux/slices/nowPlayingSlice";

const AudioProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const loop = useAppSelectior((state) => state.nowPlaying.loop);
  const shuffle = useAppSelectior((state) => state.nowPlaying.shuffle);
  const contextId = useAppSelectior((state) => state.nowPlaying.context.id);
  const queue = useAppSelectior((state) => state.nowPlaying.queue);
  const currentTrack = useAppSelectior(
    (state) => state.nowPlaying.currentTrack
  );
  const currentIndex = useAppSelectior((state) => state.nowPlaying.curentIndex);
  const volume = useAppSelectior((state) => state.nowPlaying.volume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volume / 100;
    }
  });

  useEffect(() => {
    if (currentTrack) {
      const { track_url } = currentTrack;
      if (audio.current) {
        audio.current.src = track_url;
        audio.current.play().catch((e) => console.error(e));
        dispatch(play());
      }
      dispatch(addToRecent(currentTrack));
    }
  }, [currentTrack, dispatch]);

  const playPause = useCallback(() => {
    if (audio.current) {
      if (audio.current.paused) {
        audio.current.play();
      } else {
        audio.current.pause();
      }
    }

    dispatch(toggleIsPlaying());
  }, [dispatch]);

  const playContent = useCallback(
    async (id: string, type: string, index: number) => {
      if (contextId === id) {
        if (type === "queue" || !shuffle) {
          dispatch(setNowPlaying(queue[index]));
          dispatch(setIndex(index));
        } else {
          dispatch(playShuffle(index));
        }
      } else {
        dispatch(fetchContext({ id, type, index }));
      }
    },
    [dispatch, contextId, queue, shuffle]
  );

  const prevTrack = useCallback(() => {
    if (currentIndex === 0) {
      audio.current!.currentTime = 0;
    } else {
      dispatch(setNowPlaying(queue[currentIndex - 1]));
      dispatch(setIndex(currentIndex - 1));
    }
  }, [queue, currentIndex, dispatch]);

  const nextTrack = useCallback(() => {
    if (currentIndex === queue.length - 1) {
      dispatch(pause());
    } else {
      dispatch(setNowPlaying(queue[currentIndex + 1]));
      dispatch(setIndex(currentIndex + 1));
    }
  }, [queue, currentIndex, dispatch]);

  const changeVolume = useCallback((newVolume: number /* percent */) => {
    if (audio.current) {
      if (newVolume < 0) {
        audio.current.volume = 0;
      } else if (newVolume > 100) {
        audio.current.volume = 1;
      } else {
        audio.current.volume = newVolume / 100;
      }
    }
  }, []);

  const changeCurrentTime = useCallback((to: number /* percent */) => {
    if (audio.current) {
      audio.current.currentTime = (audio.current.duration / 100) * to;
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (audio.current) {
      audio.current.muted = !audio.current.muted;
      dispatch(muteUnmute());
    }
  }, [dispatch]);

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch(updateCurrentTime(node.currentTime));
    },
    [dispatch]
  );

  const handleVolumeChange = useCallback(
    (e: React.SyntheticEvent<HTMLAudioElement>) => {
      const node = e.currentTarget;
      dispatch(updateVolume(node.volume));
    },
    [dispatch]
  );

  const handleTimeEnded = useCallback(() => {
    if (loop) {
      if (audio.current) {
        audio.current.currentTime = 0;
        audio.current.play();
      }
    } else {
      nextTrack();
    }
  }, [loop, nextTrack]);

  const helpers = useMemo(
    () => ({
      playContent,
      playPause,
      changeVolume,
      changeCurrentTime,
      toggleMute,
    }),
    [playContent, playPause, changeVolume, changeCurrentTime, toggleMute]
  );

  const queueHelpers = useMemo(
    () => ({
      prevTrack,
      nextTrack,
    }),
    [nextTrack, prevTrack]
  );

  return (
    <AudioHelpersContext.Provider value={helpers}>
      <QueueContext.Provider value={queueHelpers}>
        <audio
          onEnded={handleTimeEnded}
          onTimeUpdate={handleTimeUpdate}
          onVolumeChange={handleVolumeChange}
          ref={audio}
        />
        {children}
      </QueueContext.Provider>
    </AudioHelpersContext.Provider>
  );
};

export default AudioProvider;
