import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.user = null;
      state.error = false;
    },
    logoutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  loginStart,
  loginFailed,
  logoutFailed,
  logoutStart,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
