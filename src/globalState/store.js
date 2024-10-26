"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import popupsSlice from "./Features/popupsSlice.js";
import formatsSlice from "./Features/formatsSlice";
import tempDataSlice from "./Features/tempDataSlice";
import formStateSlice from "./Features/formStateSlice";
import smallPopupsSlice from "./Features/smallPopupsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    popups: popupsSlice,
    smallPopups: smallPopupsSlice,
    formats: formatsSlice,
    tempData: tempDataSlice,
    formState: formStateSlice,
  },
});
