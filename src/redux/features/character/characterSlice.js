import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    characters: [],
    loading: false,
};

export const createCharacter = createAsyncThunk(
    'characters/createCharacter',
    async (params) => {
        try {
            const { data } = await axios.post('/characters', params);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllCharacters = createAsyncThunk(
    'characters/getAllCharacters',
    async () => {
        try {
            const { data } = await axios.get('/characters');
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getMyCharacters = createAsyncThunk(
    'characters/getAllCharacters',
    async () => {
        try {
            const { data } = await axios.get('/characters/own');
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteCharacter = createAsyncThunk(
    'characters/deleteCharacter',
    async (id) => {
        try {
            const data = await axios.delete(`characters/${id}`, id);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: {
        [createCharacter.pending]: (state) => {
            state.loading = true;
        },
        [createCharacter.fulfilled]: (state, action) => {
            state.loading = false;
            state.characters.push(action.payload);
        },
        [createCharacter.rejected]: (state) => {
            state.loading = false;
        },

        [getAllCharacters.pending]: (state) => {
            state.loading = true;
        },
        [getAllCharacters.fulfilled]: (state, action) => {
            state.loading = false;
            state.characters = action.payload.characters;
        },
        [getAllCharacters.rejected]: (state) => {
            state.loading = false;
        },

        [getMyCharacters.pending]: (state) => {
            state.loading = true;
        },
        [getMyCharacters.fulfilled]: (state, action) => {
            state.loading = false;
            state.characters = action.payload.characters;
        },
        [getMyCharacters.rejected]: (state) => {
            state.loading = false;
        },

        [deleteCharacter.pending]: (state) => {
            state.loading = true;
        },
        [deleteCharacter.fulfilled]: (state, action) => {
            state.loading = false;
            state.characters = state.characters.filter(
                (character) => character._id !== action.payload._id
            );
        },
        [deleteCharacter.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export default characterSlice.reducer;
