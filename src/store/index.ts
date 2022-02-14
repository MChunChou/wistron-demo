import { configureStore } from "@reduxjs/toolkit"
import demoReducer from './demoSlice'
import thunkSlice from "./thunkSlice"
import userSlice from "./userSlice"

export const store = configureStore({
    reducer: {
        demo: demoReducer,
        user: userSlice,
        th: thunkSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

