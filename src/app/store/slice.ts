import { createSlice } from "@reduxjs/toolkit";
import { TypeInputForm } from "./types";
import { TypeInitialState } from "./types";

const initialState: TypeInitialState = {
  from: {} as TypeInputForm,
  to: {} as TypeInputForm,
  travelTime: 0,
  selectedOption: "",
};

export const uberSlice = createSlice({
  name: "uber",
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});
