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
  editEmployee: false,
  currentEmployee: null,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    toggleAddRecordPopup: (state, action) => {
      switch (action.payload) {
        // record popup
        case 1:
          state.issueRecord = !state.issueRecord;
          state.isHidden = !state.isHidden;
          // state.isHidden = true;
          break;
        case "record":
          // contract popup
          state.contractRecord = !state.contractRecord;
          state.isHidden = !state.isHidden;
          break;
        case 3:
          state.addEmployee = !state.addEmployee;
          state.isHidden = !state.isHidden;
          break;
        case "task":
          state.task = !state.task;
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
    togglePrintContractPopup: (state) => {
      state.printContract = !state.printContract;
      state.isHidden = !state.isHidden;
    },
    // toggleTask: (state) => {
    //   state.task = !state.task;
    //   state.isHidden = !state.isHidden;
    // },
    toggleEditEmployee: (state, action) => {
      state.editEmployee = !state.editEmployee;
      state.isHidden = !state.isHidden;
      state.currentEmployee = action.payload;
    },
    resetPopups: (state) => {
      return initialState;
    },
  },
});

export const {
  toggleAddRecordPopup,
  toggleAttendancePopup,
  toggleEditEmployee,
  togglePrintContractPopup,
  toggleTask,
  resetPopups,
} = popupsSlice.actions;

export default popupsSlice.reducer;
