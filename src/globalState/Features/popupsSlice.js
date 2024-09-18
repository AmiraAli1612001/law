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
  isHidden: false,
  issueRecord: false,
  contractRecord: false,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    toggleAddRecord: (state, action) => {
      switch (action.payload) {
        case 1:
          state.issueRecord = !state.issueRecord;
          break;

        case 2:
          state.contractRecord = !state.contractRecord;
          break;
        default:
          break;
      }
    },
  },
});

export const { toggleAddRecord } = popupsSlice.actions;

export default popupsSlice.reducer;
