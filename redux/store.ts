import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "./slices/nowPlayingSlice";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
