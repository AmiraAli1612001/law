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
  addTask: false,
  requestVacation: false,
  addClient: false,
  printContract: false,
  addIssue: false,
  addContract: false,
  addEmployee: false,
  attachments: false,
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
        case "addIssue":
          state.addIssue = !state.addIssue;
          state.isHidden = !state.isHidden;
          // state.isHidden = true;
          break;
        case "addRecord":
          // contract popup
          state.addContract = !state.addContract;
          state.isHidden = !state.isHidden;
          break;
        case "addEmployee":
          state.addEmployee = !state.addEmployee;
          state.isHidden = !state.isHidden;
          break;
        case "addTask":
          state.addTask = !state.addTask;
          state.isHidden = !state.isHidden;
          break;
        case "requestVacation":
          state.requestVacation = !state.requestVacation;
          state.isHidden = !state.isHidden;
          break;
        case "addClient":
          state.addClient = !state.addClient;
          state.isHidden = !state.isHidden;
          break;
        default:
          break;
      }
    },
    toggleAttachmentsPopup: (state) => {
      state.attachments = !state.attachments;
      state.isHidden = !state.isHidden;
    },
    togglePrintContractPopup: (state) => {
      state.printContract = !state.printContract;
      state.isHidden = !state.isHidden;
    },
    toggleEditEmployee: (state, action) => {
      state.editEmployee = !state.editEmployee;
      state.isHidden = !state.isHidden;
      state.currentEmployee = action.payload;
    },
    resetPopups: (state) => {
      document.querySelector("body").style.overflow = "auto";
      return initialState;
    },
  },
});

export const {
  toggleAddRecordPopup,
  toggleAttachmentsPopup,
  toggleEditEmployee,
  togglePrintContractPopup,
  toggleTask,
  resetPopups,
} = popupsSlice.actions;

export default popupsSlice.reducer;
