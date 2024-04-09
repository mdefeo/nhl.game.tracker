// /features/scores/scoreSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '@/app/helpers/api';

// Define a type for the slice state
interface ScoreState {
  scoreGroups: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state using that type
const initialState: ScoreState = {
  scoreGroups: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching scores
export const fetchScores = createAsyncThunk(
  'scores/fetchScores',
  async () => {
    const response = await fetchDataFromApi('https://api-web.nhle.com/v1/scoreboard/now');
    return response.gamesByDate;
  }
);

export const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScores.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchScores.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.scoreGroups = action.payload.map((group: any) => ({
          date: group.date,
          games: group.games,
        }));
      })
      .addCase(fetchScores.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default scoreSlice.reducer;
