import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = "https://messonstats.com:8443/statsbymatchunforcederror"
export const fetchMetrics = createAsyncThunk(
    'metrics/fetchMetrics',
    async (id) => {

        const apiHeaders = {
            'Content-type': 'application/json',
            Authentication: 'any-string-you-like'
        };

        const editProduct = {
            id: id,
            action: "REPORT"
        };
            const response = axios.post(url, editProduct, { headers: apiHeaders})
            return response.data
        //     const data = response.data
        //     if(data instanceof Error){
        //         throw new Error("data metrics error")
        //     }
        // return data
        }
)

const metricsSlice = createSlice({
    initialState: {
        status: 'idle',
        error: null,
        dd: null
    },
    name: 'metrics',
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMetrics.pending, (state) =>{
            state.status = "loading";
        })
        .addCase(fetchMetrics.fulfilled, (state, action) =>{
            state.status = "succeeded";
            state.dd = action.payload;
        })
        .addCase(fetchMetrics.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default metricsSlice.reducer;