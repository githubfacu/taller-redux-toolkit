import { createSlice } from "@reduxjs/toolkit";
import { AuthState, ErrorType } from "../types/authTypes";
import { loginUser } from "../thunks/authThunks";

const initialState : AuthState = {
    user: null,
    status: 'idle',
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.user = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload as ErrorType
        })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer