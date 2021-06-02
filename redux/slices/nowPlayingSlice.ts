import { Album, Artist, Track } from ".prisma/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const shuffleArray = (arr: Array<unknown>) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

export type CurrentTrack = Track & { artists: Artist[]; album: Album };

type State = {
  currentTime: number;
  curentIndex: number;
  originalIndex: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
  currentTrack: CurrentTrack | null;
  recentlyPlayed: CurrentTrack[];
  queue: CurrentTrack[];
  originalQueue: CurrentTrack[];
  context: {
    id: string | null;
  };
  loop: boolean;
  shuffle: boolean;
};

const initialState: State = {
  currentTime: 0,
  curentIndex: 0,
  originalIndex: 0,
  volume: 25,
  isPlaying: false,
  isMuted: false,
  currentTrack: null,
  recentlyPlayed: [],
  queue: [],
  originalQueue: [],
  context: { id: null },
  loop: false,
  shuffle: false,
};

export const fetchContext = createAsyncThunk(
  "context/fetchContext",
  async (
    { id, type, index }: { id: string; type: string; index: number },
    { dispatch }
  ) => {
    let data;
    if (type === "liked") {
      data = await fetch(`/api/me/tracks/play?type=liked`);
    } else if (type === "likedArtist") {
      data = await fetch(`/api/me/tracks/play?type=likedArtist&id=${id}`);
    } else {
      data = await fetch(`/api/play?type=${type}&id=${id}`);
    }
    const json = (await data.json()) as CurrentTrack[];
    const track = json[index];
    dispatch(changeContext({ content: json, contextId: id, index }));
    dispatch(setNowPlaying(track));
  }
);

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    setNowPlaying: (state, action: PayloadAction<CurrentTrack>) => {
      state.currentTrack = action.payload;
      state.recentlyPlayed.push(action.payload);
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
      action: PayloadAction<{
        content: CurrentTrack[];
        contextId: string;
        index: number;
      }>
    ) => {
      state.queue = action.payload.content;
      state.context.id = action.payload.contextId;
      state.curentIndex = action.payload.index;
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.curentIndex = action.payload;
    },
    toPrev: (state) => {
      state.curentIndex -= 1;
    },
    toNext: (state) => {
      state.curentIndex += 1;
    },
    toggleShuffle: (state) => {
      if (state.queue.length === 0) {
        state.shuffle = !state.shuffle;
        return;
      }

      if (state.shuffle) {
        state.curentIndex = state.originalIndex;
        state.currentTrack = state.originalQueue[state.curentIndex];
        state.queue = [...state.originalQueue];
        state.shuffle = false;
      } else {
        state.originalIndex = state.curentIndex;
        state.originalQueue = [...state.queue];
        shuffleArray(state.queue);
        state.curentIndex = 0;
        state.currentTrack = state.queue[0];
        state.shuffle = true;
      }
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
  setIndex,
  toPrev,
  toNext,
  toggleShuffle,
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
