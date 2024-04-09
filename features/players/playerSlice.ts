import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '@/app/helpers/api';
import { PlayerLeader } from '@/interfaces/Players';

// Async thunk for fetching player stats leaders
const fetchStatsLeaders = createAsyncThunk(
  'players/fetchStatsLeaders',
  async (statCategory: 'points' | 'goals' | 'assists') => {
    const apiUrl = `https://api-web.nhle.com/v1/skater-stats-leaders/20222023/2?categories=${statCategory}&limit=20`;
    const data = await fetchDataFromApi(apiUrl);
    return { statCategory, data: data[statCategory] };
  }
);

// Initial state of the slice
interface PlayersState {
  pointsLeaders: PlayerLeader[];
  goalsLeaders: PlayerLeader[];
  assistsLeaders: PlayerLeader[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PlayersState = {
  pointsLeaders: [],
  goalsLeaders: [],
  assistsLeaders: [],
  status: 'idle',
  error: null,
};

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatsLeaders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStatsLeaders.fulfilled, (state, action) => {
        const { statCategory, data } = action.payload;
        state.status = 'succeeded';
        if (statCategory === 'points') {
          state.pointsLeaders = data;
        } else if (statCategory === 'goals') {
          state.goalsLeaders = data;
        } else if (statCategory === 'assists') {
          state.assistsLeaders = data;
        }
      })
      .addCase(fetchStatsLeaders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default playerSlice.reducer;
export { fetchStatsLeaders };
