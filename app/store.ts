// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '@/features/players/playerSlice';
import scoresReducer from '@/features/scores/scoreSlice';
import scheduleReducer from '@/features/schedule/scheduleSlice';
import teamReducer from '@/features/team/teamSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    players: playerReducer,
    scores: scoresReducer,
    schedule: scheduleReducer,
    team: teamReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

