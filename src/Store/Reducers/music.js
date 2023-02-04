import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  max_volume: 1,
  song_index: 0,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    changeSong: (state, action) => {
      const updatedSongIndex = action.payload;
      state.song_index = updatedSongIndex;
    },
  },
});

export const { changeSong } = musicSlice.actions;

export default musicSlice.reducer;
