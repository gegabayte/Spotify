import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    date: ''
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        create: (state, action) => {
            state.token = action.payload.token,
            state.date = action.payload.date

        }
    }
})

export const {create} = AuthSlice.actions
export default AuthSlice.reducer;