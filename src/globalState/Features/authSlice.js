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

const initialState = { isHidden: false, isSignedIn: true };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleSignIn: (state) => {
      state.isSignedIn = true;
    },
  },
});

export const { toggleSignIn } = authSlice.actions;

export default authSlice.reducer;
