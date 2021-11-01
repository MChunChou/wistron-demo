import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from './index'


interface DemoType {
    value : number
}


const initialState:  DemoType = {
    value: 0
}

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        changeDemo: (state, action: PayloadAction<number>) => {            
            state.value = action.payload
        }
    }
})


export const { changeDemo } = demoSlice.actions;

export const selectDemo = (state: RootState) => state.demo.value

export default demoSlice.reducer;