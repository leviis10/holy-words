import { configureStore } from "@reduxjs/toolkit";
import bibleSlice from "./slices/bibleSlice";

const store = configureStore({
  reducer: {
    bible: bibleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
