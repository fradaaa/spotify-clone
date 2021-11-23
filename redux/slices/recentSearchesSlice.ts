import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PreviewItemType } from "../../components/Preview/PreviewItem";

type State = {
  items: PreviewItemType[];
};

const initialState: State = {
  items: [],
};

export const recentSearchesSlice = createSlice({
  name: "recentSearches",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PreviewItemType[]>) => {
      state.items = action.payload;
    },
    clearitems: (state) => {
      state.items = [];
    },
    addItem: (state, action: PayloadAction<PreviewItemType>) => {
      if (state.items.length === 10) {
        state.items = [action.payload, ...state.items.slice(0, 9)];
      } else {
        state.items = [action.payload, ...state.items];
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { setItems, clearitems, addItem, removeItem } =
  recentSearchesSlice.actions;

export default recentSearchesSlice.reducer;
