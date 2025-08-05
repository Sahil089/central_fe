import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from "../Servicefiles/slices/loginSlice"
export const store = configureStore({
  reducer: {
 login:LoginReducer,
  },
});
