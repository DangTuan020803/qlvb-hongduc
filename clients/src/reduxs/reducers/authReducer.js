import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appinfor";

const authState = {
  token: "",
  _id: "",
  name: "",
  rule: 0,
};
const initialState = {
  token: "",
  _id: "",
  name: "",
  rule: 0,
};
const authSlide = createSlice({
  name: "auth",
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = action.payload;
      syncLocal(action.payload);
    },
    removeAuth: (state, action) => {
      state.data = initialState;
      syncLocal({});
    },
  },
});

export const authReducer = authSlide.reducer;
export const { addAuth, removeAuth } = authSlide.actions;
export const authSelector = (state) => state.authReducer.data;

const syncLocal = (data) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(data));
};
