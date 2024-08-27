import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BibleState {
  category: string;
  version: string;
  randomIndex: number;
  totalVerse: number;
}

const initialState: BibleState = {
  category: "",
  version: "alkitab-terjemahan-baru",
  randomIndex: 0,
  totalVerse: 0,
};

export const counterSlice = createSlice({
  name: "bible",
  initialState,
  reducers: {
    changeVersion(state, action: PayloadAction<string>) {
      state.version = action.payload;
    },
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    changeRandomIndex(state, action: PayloadAction<number>) {
      state.randomIndex = action.payload;
    },
    changeTotalVerse(state, action: PayloadAction<number>) {
      state.totalVerse = action.payload;
    },
  },
});

export const { changeVersion, changeCategory, changeRandomIndex } =
  counterSlice.actions;

export default counterSlice.reducer;
