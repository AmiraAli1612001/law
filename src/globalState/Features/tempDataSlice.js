import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contract: null,
};

const tempDataSlice = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload;
    },
  },
});

export const { setContract } = tempDataSlice.actions;

export default tempDataSlice.reducer;