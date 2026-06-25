// store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./features/stationSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
