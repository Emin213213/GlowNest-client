import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  themaSlice from "@/redux/themaSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice,
        thema:themaSlice

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
