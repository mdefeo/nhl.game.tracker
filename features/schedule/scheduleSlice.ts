import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '@/app/helpers/api';

interface Game {
  id: string;
  homeTeam: {
    abbrev: string;
    logo: string;
    placeName: string;
  };
  awayTeam: {
    abbrev: string;
    logo: string;
    placeName: string;
  };
  startTimeUTC: string;
}

interface ScheduleState {
  gameWeek: Game[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ScheduleState = {
  gameWeek: [],
  status: 'idle',
  error: null,
};

export const fetchSchedule = createAsyncThunk(
  'schedule/fetchSchedule',
  async (date: string) => {
    const data = await fetchDataFromApi(`https://api-web.nhle.com/v1/schedule/${date}`);
    // Assuming the API returns an array of games directly
    return data.gameWeek; // Adjust based on the actual structure of your API response
  }
);

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSchedule.fulfilled, (state, action: PayloadAction<Game[]>) => {
        state.status = 'succeeded';
        state.gameWeek = action.payload;
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default scheduleSlice.reducer;
