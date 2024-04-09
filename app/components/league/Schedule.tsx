// /app/components/league/Schedule.tsx
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchSchedule } from '@/features/schedule/scheduleSlice';
import Skeleton from '../utilities/Skeleton';


const Schedule: React.FC = () => {
  const dispatch = useAppDispatch();
  const { gameWeek, status, error } = useAppSelector((state) => state.schedule);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    dispatch(fetchSchedule(today));
  }, [dispatch, today]);

  if (status === 'loading') return <Skeleton />;
  if (status === 'failed') return <div>Error: {error}</div>;


  return (
    <div className="schedule-page">
      {gameWeek.map((day: any) => (
        <div key={day.date} className="dateContainer mb-4">
          <div className="date text-lg font-bold">{day.date} ({day.dayAbbrev})</div>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            {day.games.map((game: any) => (
              <div key={game.id} className="gameScore bg-secondary rounded p-4 flex justify-between items-center shadow-2xl">
                <div className="flex items-center">
                  <Link href={`/team/${game.homeTeam.abbrev}`}>
                    <Image 
                      src={game.homeTeam.logo} 
                      alt={game.homeTeam.placeName.default} 
                      className="w-8 h-8 mr-2"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <div className="mr-2">
                    <Link href={`/team/${game.homeTeam.abbrev}`}>
                      {game.homeTeam.placeName.default}
                    </Link>
                  </div>
                </div>
                <div>{game.startTimeUTC}</div>
                <div className="flex items-center">
                  <Link href={`/team/${game.awayTeam.abbrev}`}>
                    <Image 
                      src={game.awayTeam.logo} 
                      alt={game.awayTeam.placeName.default} 
                      className="w-8 h-8 mr-2"
                      width={50}
                      height={50}
                    />
                    </Link>
                  <div className="mr-2">
                    <Link href={`/team/${game.awayTeam.abbrev}`}>
                      {game.awayTeam.placeName.default}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
