"use client";

// import {
//   // deleteAllUserAuthDataFromCookies,
//   // setCookiesFromObject,
// } from "@/helperFunctions/cookiesManagement";
import { createSlice } from "@reduxjs/toolkit";

// const deleteUserData = () => {
//   if (typeof window != undefined) {
//     return window.localStorage.removeItem('userData');
//   }
//   return null;
// };

const initialState = {
  isHidden: true,
  issueRecord: false,
  contractRecord: false,
  attendance: false,
  editEmployee: false,
  currentEmployee: null,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    toggleAddRecordPopup: (state, action) => {
      switch (action.payload) {
        case 1:
          state.issueRecord = !state.issueRecord;
          state.isHidden = !state.isHidden;
          // state.isHidden = true;
          break;

        case 2:
          state.contractRecord = !state.contractRecord;
          state.isHidden = !state.isHidden;
          break;
        default:
          break;
      }
    },
    toggleAttendancePopup: (state) => {
      state.attendance = !state.attendance;
      state.isHidden = !state.isHidden;
    },
    toggleEditEmployee: (state,action) => {
      state.editEmployee = !state.editEmployee;
      state.isHidden = !state.isHidden;
      state.currentEmployee = action.payload
    },
    resetPopups: (state) => {
      return initialState;
    },
  },
});

export const { toggleAddRecordPopup, toggleAttendancePopup,toggleEditEmployee, resetPopups } =
  popupsSlice.actions;

export default popupsSlice.reducer;
