import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { uberSlice } from "../store/slice";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(uberSlice.actions, dispatch);
};
