import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHijriDate: false,
};

export const formatsSlice = createSlice({
  name: "formats",
  initialState,
  reducers: {
    toggleHijriDate: (state) => {
      return {
        ...state,
        isHijriDate: !state.isHijriDate
      }
    },
    resetFormats: (state) => {
      return initialState;
    },
  },
});

export const { toggleHijriDate, resetFormats } = formatsSlice.actions;

export default formatsSlice.reducer;
