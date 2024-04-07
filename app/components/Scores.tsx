// /app/components/scores.tsx
import React, { useState, useEffect } from 'react';
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

  return (
    <div className="scores-page">
      {scoreGroups.map((group) => (
        <div key={group.date} className="dateContainer mb-4">
          <div className="date text-lg font-bold">{group.date}</div>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            {group.games.map((game: any) => (
              <div key={game.id} className="gameScore bg-neutral rounded p-4 flex justify-between items-center shadow-2xl">
                <div className={`flex items-center ${game.homeTeam.score > game.awayTeam.score ? 'font-bold winningTeam' : ''}`}>
                  <div className="mr-2">{game.homeTeam.name.default}</div>
                  <div>{game.homeTeam.score}</div>
                </div>
                <div className={`flex items-center ${game.awayTeam.score > game.homeTeam.score ? 'font-bold winningTeam' : ''}`}>
                  <div className="mr-2">{game.awayTeam.name.default}</div>
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
