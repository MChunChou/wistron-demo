import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from './index'


const url = `https://data.tainan.gov.tw/dataset/271198eb-d49e-4f99-893f-dfe7724192c1/resource/0c02d152-7091-4316-9880-43f13a9243ac/download/106libraryinfo.csv`

export const fetchAPI = createAsyncThunk ( 
    'get/LibraryInfo',
    async (id: string) => {        
        const res = await fetch(url).then((res)=>{            
            return res.text()
        }).then(r => {
            console.log(r)
            return r
        })
        
        return res
    }
)


interface ThunkType {
    value : number
}


const initialState:  ThunkType = {
    value: 0
}

const thunkSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAPI.fulfilled, (state, {payload})=>{
                state.value = 1
            })
            .addCase(fetchAPI.rejected, (state, {payload})=>{
                state.value = 0
            })
    }
        
    
})


export const selectDemo = (state: RootState) => state.demo.value

export default thunkSlice.reducer;