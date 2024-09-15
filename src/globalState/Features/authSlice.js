"use client";

import {
  deleteAllUserAuthDataFromCookies,
  setCookiesFromObject,
} from "@/helperFunctions/cookiesManagement";
import { createSlice } from "@reduxjs/toolkit";

// const deleteUserData = () => {
//   if (typeof window != undefined) {
//     return window.localStorage.removeItem('userData');
//   }
//   return null;
// };

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleSignIn: (state) => {
      return {
        ...initialState,
        isHidden: false,
        signIn: true,
      };
    },

    toggleSignedIn: (state, action) => {
      setCookiesFromObject(action.payload.userData, action.payload.days);
      return {
        ...initialState,
        isSignedIn: true,
      };
    },
  },
});

export const { toggleSignIn, toggleSignedIn } = authSlice.actions;

export default authSlice.reducer;
