import { Album, Artist, Track } from ".prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentTrack = Track & { artists: Artist[]; album: Album };

type State = {
  currentTime: number;
  curentIndex: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
  currentTrack: CurrentTrack | null;
  queue: CurrentTrack[];
  context: {
    id: string | null;
  };
  loop: boolean;
  shuffle: boolean;
};

const initialState: State = {
  currentTime: 0,
  curentIndex: 0,
  volume: 25,
  isPlaying: false,
  isMuted: false,
  currentTrack: null,
  queue: [],
  context: { id: null },
  loop: false,
  shuffle: false,
};

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    setNowPlaying: (state, action: PayloadAction<CurrentTrack>) => {
      state.currentTrack = action.payload;
    },
    updateVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload * 100;
    },
    updateCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    toggleIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    muteUnmute: (state) => {
      state.isMuted = !state.isMuted;
    },
    changeContext: (
      state,
      action: PayloadAction<{ content: CurrentTrack[]; contextId: string }>
    ) => {
      state.queue = action.payload.content;
      state.context.id = action.payload.contextId;
      state.curentIndex = 0;
    },
    toPrev: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.curentIndex -= 1;
      } else {
        state.currentTime = 0;
      }
    },
    toNext: (state) => {
      state.curentIndex += 1;
    },
  },
});

export const {
  setNowPlaying,
  updateVolume,
  updateCurrentTime,
  toggleIsPlaying,
  play,
  pause,
  muteUnmute,
  changeContext,
  toPrev,
  toNext,
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
