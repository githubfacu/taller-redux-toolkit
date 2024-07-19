import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { loggerMidelware } from "./middleware";

export const store = configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMidelware),
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch