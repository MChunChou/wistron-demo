import { configureStore } from "@reduxjs/toolkit"
import demoReducer from './demoSlice'
import userSlice from "./userSlice"

export const store = configureStore({
    reducer: {
        demo: demoReducer,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

