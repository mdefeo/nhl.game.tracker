// /app/components/scores.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchDataFromApi } from '@/app/helpers/api';

const Scores: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);
  const [scoreGroups, setScoreGroups] = useState<any[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const data = await fetchDataFromApi('https://api-web.nhle.com/v1/scoreboard/now');
        const gamesByDate = data.gamesByDate;
        const scoreGroups = gamesByDate.map((group: any) => ({
          date: group.date,
          games: group.games,
        }));
        setScoreGroups(scoreGroups);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

  if (!games) {
    return( 
      <div className="flex flex-col gap-4 w-full columns-2">
        <div className="skeleton h-8 w-50"></div>
        <div className="skeleton h-8 w-50"></div>
      </div>
    );
  }

  return (
    <div className="scores-page">
      {scoreGroups.map((group) => (
        <div key={group.date} className="dateContainer mb-4">
          <div className="date text-lg font-bold">{group.date}</div>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            {group.games.map((game: any) => (
              <div key={game.id} className="gameScore bg-neutral rounded p-4 flex justify-between items-center shadow-2xl">
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
