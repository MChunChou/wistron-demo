import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { STATUS_CODES } from 'http'
import { RootState } from './index'

interface User {
    name: string,
    status: boolean
}

const initialState: User[] = [{
    name: 'Annie',
    status: false
}]


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push({name: action.payload.name, status: action.payload.status})
        },
        removeUser: (state, action: PayloadAction<number>) => {            
            state.splice(action.payload, 1);
        },
        clearAll: (state) => {         
            return []
        }
    }
})

export const {addUser, removeUser, clearAll} = userSlice.actions;

export const selectCount = (state: RootState) => state.user

export default userSlice.reducer;