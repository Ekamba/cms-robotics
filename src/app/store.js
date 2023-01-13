import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trolleyReducer from "../features/trolleys/trolleySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trolley: trolleyReducer,
  },
});
