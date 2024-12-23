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
  checkIn: false,
  checkOut: false,
  currentAttendance: false,
  fileLink: "",
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    toggleAddRecordPopup: (state, action) => {
      state.isHidden = !state.isHidden;
      switch (action.payload) {
        case "addIssue":
          state.addIssue = !state.addIssue;
          break;
        case "addContract":
          state.addContract = !state.addContract;
          break;
        case "addEmployee":
          state.addEmployee = !state.addEmployee;
          break;
        case "addTask":
          state.addTask = !state.addTask;
          break;
        case "requestVacation":
          state.requestVacation = !state.requestVacation;
          break;
        case "addClient":
          state.addClient = !state.addClient;
          break;
        default:
          break;
      }
    },
    toggleCheckInPopup: (state) => {
      state.isHidden = !state.isHidden;
      state.checkIn = !state.checkIn;
    },
    toggleCheckOutPopup: (state) => {
      state.isHidden = !state.isHidden;
      state.checkOut = !state.checkOut;
      
    },
    toggleAttachmentsPopup: (state, action) => {
      state.attachments = !state.attachments;
      state.fileLink = action?.payload ?? "";
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
    toggleCurrentAttendance: (state) => {
      state.currentAttendance = !state.currentAttendance;
      state.isHidden = !state.isHidden;
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
  toggleCurrentAttendance,
  toggleCheckOutPopup,
  toggleCheckInPopup,
  resetPopups,
} = popupsSlice.actions;

export default popupsSlice.reducer;
