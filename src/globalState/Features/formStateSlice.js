const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  addRecord: false,
};

const formStateSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    openAddFormRecord: (state) => {
      state.addRecord = true;
    },
    closeAddFormRecord: (state) => {
      state.addRecord = false;
    },
  },
});

export const { openAddFormRecord, closeAddFormRecord } = formStateSlice.actions;

export default formStateSlice.reducer;