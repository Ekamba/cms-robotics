import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userInfo: {},
  userToken: null,
  isError: null,
  message: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
