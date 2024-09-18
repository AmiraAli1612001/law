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

const initialState = { isHidden: false, isSignedIn: false, attendance: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleSignIn: (state) => {
      state.isSignedIn = true;
    },
    toggleAttendance: (state) => {
      state.attendance = !state.attendance;
    },
    resetAuth: (state) => {
      return initialState;
    },
  },
});

export const { toggleSignIn, toggleAttendance, resetAuth } = authSlice.actions;

export default authSlice.reducer;
