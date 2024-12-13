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
  attendance: false,
  isSignedIn: isClient() ? localStorage.getItem("user") : false,
  user: isClient() ? JSON.parse(localStorage.getItem("user") || null) : null,
  attendanceId: isClient() ? localStorage.getItem("attendanceId") : null,
};
if (isClient()) {
  console.log(localStorage.getItem("user"));
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
    toggleUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    resetAuth: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("attendanceId");
      return initialState;
    },
  },
});

export const {
  toggleSignIn,
  toggleAttendance,
  toggleAttendanceId,
  resetAuth,
  toggleUser,
} = authSlice.actions;

export default authSlice.reducer;
