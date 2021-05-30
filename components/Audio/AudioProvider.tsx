import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AudioHelpersContext, QueueContext } from "../../Context";
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
  changeContext,
  toPrev,
  toNext,
} from "../../redux/slices/nowPlayingSlice";

const AudioProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const audio = useRef<HTMLAudioElement>(null);
  const queue = useAppSelectior((state) => state.nowPlaying.queue);
  const currentIndex = useAppSelectior((state) => state.nowPlaying.curentIndex);
  const volume = useAppSelectior((state) => state.nowPlaying.volume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volume / 100;
    }
  }, []);

  const playTrack = useCallback((track: CurrentTrack) => {
    const { track_url } = track;

    if (audio.current && audio.current.src !== track_url) {
      audio.current.src = track_url;
      dispatch(setNowPlaying(track));
    }

    audio.current!.play();
    dispatch(play());
  }, []);

  const pauseTrack = useCallback(() => {
    audio.current!.pause();
    dispatch(pause());
  }, []);

  const playPause = useCallback(() => {
    if (audio.current && audio.current.paused) {
      audio.current.play();
    } else {
      audio.current!.pause();
    }
    dispatch(toggleIsPlaying());
  }, []);

  const playContent = useCallback(
    (content: CurrentTrack[], contextId: string) => {
      dispatch(changeContext({ content, contextId }));
      playTrack(content[0]);
    },
    []
  );

  const prevTrack = useCallback(() => {
    if (currentIndex === 0) {
      audio.current!.currentTime = 0;
      dispatch(toPrev(false));
    } else {
      playTrack(queue[currentIndex - 1]);
      dispatch(toPrev(true));
    }
  }, [queue, currentIndex]);

  const nextTrack = useCallback(() => {
    if (currentIndex === queue.length - 1) {
      dispatch(pause());
    } else {
      playTrack(queue[currentIndex + 1]);
      dispatch(toNext());
    }
  }, [queue, currentIndex]);

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
      playContent,
      playTrack,
      pauseTrack,
      playPause,
      changeVolume,
      changeCurrentTime,
      toggleMute,
    }),
    []
  );

  const queueHelpers = useMemo(
    () => ({
      prevTrack,
      nextTrack,
    }),
    [queue, currentIndex]
  );

  return (
    <AudioHelpersContext.Provider value={helpers}>
      <QueueContext.Provider value={queueHelpers}>
        <audio
          onEnded={nextTrack}
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
