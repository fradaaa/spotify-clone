import { NowPlayingType } from "../Context/NowPlayingContext";

type State = {
  currentTime: number;
  volume: number;
  isPlaying: boolean;
  nowPlaying: NowPlayingType;
};

type Action =
  | { type: "set_now_playing"; payload: NowPlayingType }
  | { type: "change_volume"; payload: number }
  | { type: "change_current_time"; payload: number }
  | { type: "toggle_is_playing" }
  | { type: "play" }
  | { type: "pause" };

export const audioInitialState: State = {
  currentTime: 0,
  volume: 25,
  isPlaying: false,
  nowPlaying: {
    id: "1G79vIY7FPXPjBj9cpweZD",
    title: "Miracle",
    duration: 188,
    track_url:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-13fab.appspot.com/o/music%2FCHVRCHES%2F2018%20-%20Love%20Is%20Dead%2F07%20-%20Miracle.mp3?alt=media&token=169a5341-4de0-4186-a8c8-6d25768068c0",
    image: "https://i.scdn.co/image/ab67616d0000b273d0cac97a7157fb08cd3af351",
    artists: [{ id: "3CjlHNtplJyTf9npxaPl5w", image: "", name: "CHRVCHES" }],
  },
};

const audioReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_now_playing":
      return {
        ...state,
        nowPlaying: action.payload,
      };
    case "change_volume": {
      return {
        ...state,
        volume: action.payload * 100,
      };
    }
    case "change_current_time": {
      return {
        ...state,
        currentTime: action.payload,
      };
    }
    case "toggle_is_playing":
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case "play":
      return { ...state, isPlaying: true };
    case "pause":
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export default audioReducer;
