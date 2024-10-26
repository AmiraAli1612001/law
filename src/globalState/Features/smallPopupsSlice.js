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
  task: false,
  printContract: false,
  issueRecord: false,
  contractRecord: false,
  addEmployee: false,
  attendance: false,
  attachments: false,
  editEmployee: false,
  currentEmployee: null,
};

export const smallPopupsSlice = createSlice({
  name: "smallPopups",
  initialState,
  reducers: {
    toggleAttendancePopup: (state) => {
      state.attendance = !state.attendance;
      state.isHidden = !state.isHidden;
    },
    resetPopups: (state) => {
      return initialState;
    },
  },
});

export const {
  toggleAttendancePopup,
  resetPopups,
} = smallPopupsSlice.actions;

export default smallPopupsSlice.reducer;
