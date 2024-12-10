"use client";

import { isClient } from "@/helperFunctions/clientOnly";
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
  isHidden: false,
  // isSignedIn: process.env.NEXT_PUBLIC_ENV == "dev",
  isSignedIn: isClient() ? localStorage.getItem("JWT") : false,
  attendance: false,
  JWT: isClient() ? localStorage.getItem("JWT") : null,
  attendanceId: isClient() ? localStorage.getItem("attendanceId") : null,
};
if (isClient()) {
  console.log(localStorage.getItem("JWT"));
}
console.log(process.env.NEXT_PUBLIC_DEV);
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
    toggleAttendanceId: (state, action) => {
      localStorage.setItem("attendanceId", action.payload);
      state.attendanceId = action.payload;
    },
    toggleJWT: (state, action) => {
      state.JWT = action.payload;
      localStorage.setItem("JWT", action.payload);
    },
    resetAuth: (state) => {
      localStorage.removeItem("JWT");
      localStorage.removeItem("attendanceId");
      return initialState;
    },
  },
});

export const { toggleSignIn, toggleAttendance,toggleAttendanceId, resetAuth, toggleJWT } =
  authSlice.actions;

export default authSlice.reducer;
