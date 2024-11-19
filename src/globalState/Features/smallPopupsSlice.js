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
  attendance: false,
  delaySession: false,
  statements: false,
  previousClient:false,
};

export const smallPopupsSlice = createSlice({
  name: "smallPopups",
  initialState,
  reducers: {
    toggleAttendancePopup: (state) => {
      state.attendance = !state.attendance;
      state.isHidden = !state.isHidden;
    },
    togglePreviousClientPopup: (state) => {
      state.previousClient = !state.previousClient;
      state.isHidden = !state.isHidden;
    },
    toggleStatementsPopup: (state) => {
      state.statements = !state.statements;
      state.isHidden = !state.isHidden;
    },

    toggleDelaySessionPopup: (state) => {
      state.delaySession = !state.delaySession;
      state.isHidden = !state.isHidden;
    },
    resetSmallPopups: (state) => {
      return initialState;
    },
  },
});

export const {
  toggleAttendancePopup,
  toggleDelaySessionPopup,
  togglePreviousClientPopup,
  toggleStatementsPopup,
  resetSmallPopups,
} = smallPopupsSlice.actions;

export default smallPopupsSlice.reducer;
