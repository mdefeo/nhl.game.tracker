// /app/components/league/Scores.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchScores } from '@/features/scores/scoreSlice';
import Skeleton from '../utilities/Skeleton';

const Scores: React.FC = () => {
  const dispatch = useAppDispatch();
  const { scoreGroups, status, error } = useAppSelector((state) => state.scores);

  useEffect(() => {
    dispatch(fetchScores());
  }, [dispatch]);

  // Loading state
  if (status === 'loading') {
    return <Skeleton />;
  }

  // Error state
  if (status === 'failed') {
    return <div>Error fetching scores: {error}</div>;
  }

  // Display scores
  return (
    <div className="scores-page">
      {scoreGroups.map((group) => (
        <div key={group.date} className="dateContainer mb-4">
          <div className="date text-lg font-bold">{group.date}</div>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            {group.games.map((game: any) => (
              <div key={game.id} className="gameScore bg-secondary rounded p-4 flex justify-between items-center shadow-2xl">
                <div className={`flex items-center ${game.homeTeam.score > game.awayTeam.score ? 'font-bold winningTeam' : ''}`}>
                  <Link href={`/team/${game.homeTeam.abbrev}`}>
                    <Image 
                      src={game.homeTeam.logo} 
                      alt={game.homeTeam.name.default} 
                      className="w-8 h-8 mr-2"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <div className="mr-2">
                    <Link href={`/team/${game.homeTeam.abbrev}`}>
                      {game.homeTeam.name.default}
                    </Link>
                  </div>
                  <div>{game.homeTeam.score}</div>
                </div>
                <div className={`flex items-center ${game.awayTeam.score > game.homeTeam.score ? 'font-bold winningTeam' : ''}`}>
                  <Link href={`/team/${game.awayTeam.abbrev}`}>
                    <Image 
                      src={game.awayTeam.logo} 
                      alt={game.awayTeam.name.default}
                      className="w-8 h-8 mr-2"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <div className="mr-2">
                    <Link href={`/team/${game.awayTeam.abbrev}`}>
                      {game.awayTeam.name.default}
                    </Link>
                  </div>
                  <div>{game.awayTeam.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scores;
