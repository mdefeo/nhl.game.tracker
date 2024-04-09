// features/search/searchSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { SearchResult } from '@/interfaces/Search';
import { fetchDataFromApi } from '@/app/helpers/api';

interface SearchState {
  results: SearchResult[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
  'search/fetchResults',
  async (query: string, { rejectWithValue }) => {
    try {
      const skaterUrl = `https://api.nhle.com/stats/rest/en/skater/summary?cayenneExp=seasonId=20232024&limit=-1`;
      const goalieUrl = `https://api.nhle.com/stats/rest/en/goalie/summary?cayenneExp=seasonId=20232024&limit=-1`;

      // Parallel requests to both APIs
      const skaterResponsePromise = fetchDataFromApi(skaterUrl);
      const goalieResponsePromise = fetchDataFromApi(goalieUrl);

      // Await both promises to resolve
      const [skaterResponse, goalieResponse] = await Promise.all([skaterResponsePromise, goalieResponsePromise]);

      // Filter and map skaters
      const filteredSkaters = skaterResponse.data.filter((player: any) =>
        player.skaterFullName.toLowerCase().includes(query.toLowerCase())
      ).map((player: any) => ({
        id: player.playerId,
        name: player.skaterFullName,
        team: player.teamAbbrevs,
        position: 'skater',
      }));

      // Filter and map goalies
      const filteredGoalies = goalieResponse.data.filter((player: any) =>
        player.goalieFullName.toLowerCase().includes(query.toLowerCase())
      ).map((player: any) => ({
        id: player.playerId,
        name: player.goalieFullName,
        team: player.teamAbbrevs,
        position: 'goalie', // Goalie position
      }));

      // Combine skater and goalie results
      const combinedResults = [...filteredSkaters, ...filteredGoalies];
      // console.log('---combinedResults', combinedResults);
      return combinedResults;
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      return rejectWithValue('Failed to fetch search results');
    }
  }
);



export const selectSearchResults = (state: RootState) => state.search.results;
export const selectSearchStatus = (state: RootState) => state.search.status;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default searchSlice.reducer;
