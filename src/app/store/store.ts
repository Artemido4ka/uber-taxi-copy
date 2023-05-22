import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { uberSlice } from "./slice";

const rootReducer = combineReducers({
  uber: uberSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>
