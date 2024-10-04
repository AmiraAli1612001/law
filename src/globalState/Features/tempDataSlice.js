import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contract: null,
  tasks:[]
};

const tempDataSlice = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    resetTempData: (state) => {
      return initialState;
    },
  },
});

export const {setTasks, setContract , resetTempData} = tempDataSlice.actions;

export default tempDataSlice.reducer;