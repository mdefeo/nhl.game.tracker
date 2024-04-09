import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '@/app/helpers/api';
import { TeamData } from '@/interfaces/TeamData';

interface TeamState {
  teamData: TeamData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TeamState = {
  teamData: null,
  status: 'idle',
  error: null,
};

// Async thunk for fetching team data
export const fetchTeamData = createAsyncThunk<TeamData, string>(
  'team/fetchTeamData',
  async (abbreviation, { rejectWithValue }) => {
    try {
      const response = await fetchDataFromApi(`https://api-web.nhle.com/v1/club-stats/${abbreviation}/now`);
      return response as TeamData;
    } catch (error) {
      return rejectWithValue('Failed to fetch team data');
    }
  }
);

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeamData.fulfilled, (state, action: PayloadAction<TeamData>) => {
        state.status = 'succeeded';
        state.teamData = action.payload;
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default teamSlice.reducer;
