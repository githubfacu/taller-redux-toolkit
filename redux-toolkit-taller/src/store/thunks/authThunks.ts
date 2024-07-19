import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit"
import { UserType } from "../types/authTypes"

const url = import.meta.env.VITE_API_URL

interface UserAuth {
    email: string
    password: string
}

export const loginUser: AsyncThunk<UserType, UserAuth, Record<string, never>> = createAsyncThunk('auth/loginUser', async (credentials: UserAuth, thunkAPI) => {
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        if (!response.ok) {
            const errorData = await response.json();

            if(response.status === 400){
                return thunkAPI.rejectWithValue({ message: 'Error en la solicitud'});
            }
            
            return thunkAPI.rejectWithValue({ message: errorData.error });
        }

        const token = await response.json()
        sessionStorage.setItem('token', JSON.stringify(token))
        return ({email: credentials.email})

    } catch (error) {
        console.error(error)
        return thunkAPI.rejectWithValue({ message: 'Error de conexión' });
    }
})