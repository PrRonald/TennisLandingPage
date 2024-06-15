import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL = 'https://messonstats.com:8443/product';
export const playerFetch = createAsyncThunk(
    'plater/playerFetch',
    async () => {
        const response = await axios.get(URL);
        return response.data;
    }
)

export const playerSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'players',
    extraReducers: (builder) => {
        builder
        .addCase(playerFetch.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(playerFetch.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(playerFetch.rejected, (state) => {
            state.status = 'failed';
          });
    }
})

export default playerSlice.reducer;
