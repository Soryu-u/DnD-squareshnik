import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import characterSlice from './features/character/characterSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        characters: characterSlice, 
    }
})
