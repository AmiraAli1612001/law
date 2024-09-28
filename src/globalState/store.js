"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import popupsSlice from "./Features/popupsSlice";
import formatsSlice  from "./Features/formatsSlice";
import tempDataSlice from "./Features/tempDataSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    popups: popupsSlice,
    formats: formatsSlice,
    tempData: tempDataSlice
  },
});
