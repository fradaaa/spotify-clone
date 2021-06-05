import { Album, Artist, Track } from ".prisma/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

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
    type: string | null;
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
  context: { id: null, type: null },
  loop: false,
  shuffle: false,
};

export const fetchContext = createAsyncThunk<
  void,
  {
    id: string;
    type: string;
    index: number;
  },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("context/fetchContext", async ({ id, type, index }, { dispatch }) => {
  let data;

  if (type === "liked" || type === "likedArtist") {
    data = await fetch(`/api/me/tracks/play?type=${type}&id=${id}`);
  } else {
    data = await fetch(`/api/play?type=${type}&id=${id}`);
  }

  const tracks = (await data.json()) as CurrentTrack[];

  dispatch(
    setContext({
      tracks,
      context: { id, type },
      index,
    })
  );
});

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
    setContext: (
      state,
      action: PayloadAction<{
        tracks: CurrentTrack[];
        context: { id: string; type: string };
        index: number;
      }>
    ) => {
      const { context, tracks, index } = action.payload;
      let coppiedTracks;

      if (state.shuffle) {
        if (state.context.id !== context.id) {
          state.originalQueue = tracks;
          state.originalIndex = 0;
          coppiedTracks = [...tracks];
        } else {
          coppiedTracks = [...state.queue];
        }

        const [trackToPlay] = coppiedTracks.splice(index, 1);
        shuffleArray(coppiedTracks);
        state.queue = [trackToPlay, ...coppiedTracks];
        state.curentIndex = 0;
      } else {
        state.queue = tracks;
        state.curentIndex = index;
      }

      state.context = context;
      state.currentTrack = state.queue[state.curentIndex];
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.curentIndex = action.payload;
    },
    toggleShuffle: (state) => {
      if (state.queue.length === 0) {
        state.shuffle = !state.shuffle;
        return;
      }

      if (state.shuffle) {
        state.curentIndex = state.originalIndex;
        state.currentTrack = state.originalQueue[state.originalIndex];
        state.queue = [...state.originalQueue];
        state.originalQueue = [];
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
    addToRecent: (state, action: PayloadAction<CurrentTrack>) => {
      state.recentlyPlayed.unshift(action.payload);
    },
    toggleLoop: (state) => {
      state.loop = !state.loop;
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
  setContext,
  setIndex,
  toggleShuffle,
  addToRecent,
  toggleLoop,
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
