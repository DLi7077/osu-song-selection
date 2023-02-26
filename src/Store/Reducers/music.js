import { createSlice } from "@reduxjs/toolkit";
import { SONGS } from "../../Constants/songs";

const initialState = {
  max_volume: 1,
  song_index: 0,
  title: "",
  artist: "",
  difficulty: "",
  star_rating: 0,
  background: null,
  start_time: 75,
  audio_track: new Audio(),
  loaded: false,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setLoaded: (state, action) => {
      const loadStatus = action.payload;
      return {
        ...state,
        loaded: loadStatus,
      };
    },
    changeSong: (state, action) => {
      const updatedSongIndex = action.payload;
      return {
        ...state,
        ...SONGS[updatedSongIndex],
        song_index: updatedSongIndex,
        audio_track: SONGS[updatedSongIndex].audio,
      };
    },
  },
});

export const { changeSong, setLoaded } = musicSlice.actions;

export default musicSlice.reducer;
