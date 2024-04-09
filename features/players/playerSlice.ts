// /features/players/playerSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '@/app/helpers/api';
import { RootState, AppDispatch } from '@/app/store';

interface Player {
  id: string;
  name: string;
  position: string;
}

interface PlayerState {
  players: Player[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlayerState = {
  players: [],
  status: 'idle',
  error: null,
};

export const fetchPlayers = createAsyncThunk<Player[]>('players/fetchPlayers', async () => {
  const data = await fetchDataFromApi('https://api.example.com/players');
  return data as Player[];
});

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayers.fulfilled, (state, action: PayloadAction<Player[]>) => {
        state.status = 'succeeded';
        state.players = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default playerSlice.reducer;
