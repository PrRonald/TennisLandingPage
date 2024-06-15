import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SplitString } from "../functions/SplitString";

export const fetchMatch = createAsyncThunk(
  'match/fetchMatch',
  async ({ players, description, id }) => {
    const API_HEADERS = {
      'Content-type': 'application/json',
      Authentication: 'any-string-you-like'
    };

    const editProduct = {
      description: description,
      action: "REPORT"
    };

    const response = await axios.post("https://messonstats.com:8443/statsbymatch", editProduct, { headers: API_HEADERS });

    const data = response.data;
    if (data.length < 2) {
      throw new Error("The data length < 2");
    }

    const [playerone, playertow] = data;
    const [Onename, Onelastname] = SplitString(playerone._id);
    const [Towname, Towlastname] = SplitString(playertow._id);

    const transformedPlayers = {
      playerOne: {
        id: players.playerOne.id,
        name: Onename,
        lastname: Onelastname,
        points: [
          playerone.ACE,
          playerone.SERVICE_FAULT,
          playerone.DOUBLE_FAULT,
          playerone.RETURN_ERROR,
          playerone.FORCED_ERROR,
        ],
        winner: [
          playerone.WINNER,
          playerone.UNFORCED_ERROR
        ],
        error: players.playerOne.error
      },
      playerTow: {
        id: players.playerTow.id,
        name: Towname,
        lastname: Towlastname,
        points: [
          playertow.ACE,
          playertow.SERVICE_FAULT,
          playertow.DOUBLE_FAULT,
          playertow.RETURN_ERROR,
          playertow.FORCED_ERROR,
        ],
        winner: [
          playertow.WINNER,
          playertow.UNFORCED_ERROR
        ],
        error: players.playerTow.error
      }
    };

    return transformedPlayers;
  }
);

const matchSlice = createSlice({
  name: "match",
  initialState: {
    transformedPlayers: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMatch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.transformedPlayers = action.payload;
      })
      .addCase(fetchMatch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default matchSlice.reducer;
