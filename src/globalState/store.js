"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import popupsSlice from "./Features/popupsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    popup: popupsSlice,
  },
});
