import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./Reducers/music";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
