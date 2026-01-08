import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme-slice";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
