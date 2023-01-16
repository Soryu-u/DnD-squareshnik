import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    characters: [],
    loading: false,
}

export const createCharacter = createAsyncThunk('characters/createCharacter', async(params) => {
    try {
        const { data } = await axios.post('/characters', params);
        console.log(params)
        return data
    } catch (error) {
        console.log(error);
    }
})

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: {
        [createCharacter.pending]: (state) => {
            state.loading = true
        },
        [createCharacter.fulfilled]: (state, action) => {
            state.loading = false
            state.characters.push(action.payload)
        },
        [createCharacter.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default characterSlice.reducer
