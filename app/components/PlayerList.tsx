// /app/components/PlayerList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPlayers } from '@/features/players/playerSlice';

const PlayerList = () => {
  const dispatch = useAppDispatch();
  const { players, status, error } = useAppSelector((state) => state.players);

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{player.name} - {player.position}</li>
      ))}
    </ul>
  );
};

export default PlayerList;
