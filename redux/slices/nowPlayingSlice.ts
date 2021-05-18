import { Artist } from ".prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentTrack = {
  id: string;
  title: string;
  image: string;
  duration: number;
  artists: Artist[];
  track_url: string;
};

type State = {
  currentTime: number;
  volume: number;
  isPlaying: boolean;
  currentTrack: CurrentTrack;
};

const initialState: State = {
  currentTime: 0,
  volume: 25,
  isPlaying: false,
  currentTrack: {
    id: "1G79vIY7FPXPjBj9cpweZD",
    title: "Miracle",
    duration: 188,
    track_url:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-13fab.appspot.com/o/music%2FCHVRCHES%2F2018%20-%20Love%20Is%20Dead%2F07%20-%20Miracle.mp3?alt=media&token=169a5341-4de0-4186-a8c8-6d25768068c0",
    image: "https://i.scdn.co/image/ab67616d0000b273d0cac97a7157fb08cd3af351",
    artists: [{ id: "3CjlHNtplJyTf9npxaPl5w", image: "", name: "CHRVCHES" }],
  },
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
  },
});

export const {
  setNowPlaying,
  updateVolume,
  updateCurrentTime,
  toggleIsPlaying,
  play,
  pause,
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
