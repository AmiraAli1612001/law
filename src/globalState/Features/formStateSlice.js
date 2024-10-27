const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  addRecord: false,
  currentForm: null,
  currentErrors: null,
};

const formStateSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    toggleAddRecordPopup: (state) => {
      state.addRecord = !state.addRecord;
    },
    openAddFormRecord: (state) => {
      state.addRecord = true;
    },
    closeAddFormRecord: (state) => {
      state.addRecord = false;
    },
    setCurrentForm: (state, action) => {
      state.currentForm = action.payload;
    },
    setCurrentErrors: (state, action) => {
      state.currentErrors = action.payload;
    },
    resetFormState: (state) => {
      return initialState;
    },
  },
});

export const {
  toggleAddRecordPopup,
  openAddFormRecord,
  closeAddFormRecord,
  setCurrentForm,
  setCurrentErrors,
  resetFormState,
} = formStateSlice.actions;

export default formStateSlice.reducer;
