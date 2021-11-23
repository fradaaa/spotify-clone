import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "./slices/nowPlayingSlice";
import recentSearchesReducer from "./slices/recentSearchesSlice";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    recentSearches: recentSearchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
