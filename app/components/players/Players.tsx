import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchStatsLeaders } from '@/features/players/playerSlice';
import { PlayerLeader } from '@/interfaces/Players';
import Image from 'next/image';
import Skeleton from '../utilities/Skeleton';

export const Players: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pointsLeaders, goalsLeaders, assistsLeaders, status, error } = useAppSelector((state) => state.players);
  const [activeTab, setActiveTab] = useState('points');

  useEffect(() => {
    dispatch(fetchStatsLeaders('points'));
    dispatch(fetchStatsLeaders('goals'));
    dispatch(fetchStatsLeaders('assists'));
  }, [dispatch]);

  const renderLeadersTable = (leaders: PlayerLeader[], title: string) => (
    <div className={`${activeTab === title.toLowerCase() ? '' : 'hidden'} mt-10`}>
      <table className="table-auto w-full table-zebra-zebra">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Position</th>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((player) => (
            <tr key={player.id}>
              <td className="flex items-center">
                <Link href={`/player/${player.id}`}>
                  <Image src={player.headshot} alt={`${player.firstName.default} ${player.lastName.default}`} width={40} height={40} className="rounded-full" />
                </Link>
                <Link href={`/player/${player.id}`}>
                  <span className="ml-2">{`${player.firstName.default} ${player.lastName.default}`}</span>
                </Link>
              </td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Link href={`/team/${player.teamAbbrev}`} className='flex items-center'>
                    <Image src={player.teamLogo} alt={player.teamName.default} width={32} height={32} unoptimized />
                  </Link>
                  <Link href={`/team/${player.teamAbbrev}`}>
                    <span className="ml-2">{player.teamName.default}</span>
                  </Link>
                </div>
              </td>
              <td>{player.position}</td>
              <td>{player.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (status === 'loading') return <Skeleton />;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto mt-10">
      <div className="tabs tabs-boxed">
        <a className={`tab ${activeTab === 'points' ? 'tab-active' : ''}`} onClick={() => setActiveTab('points')}>Points</a>
        <a className={`tab ${activeTab === 'goals' ? 'tab-active' : ''}`} onClick={() => setActiveTab('goals')}>Goals</a>
        <a className={`tab ${activeTab === 'assists' ? 'tab-active' : ''}`} onClick={() => setActiveTab('assists')}>Assists</a>
      </div>
      {activeTab === 'points' && renderLeadersTable(pointsLeaders, "Points")}
      {activeTab === 'goals' && renderLeadersTable(goalsLeaders, "Goals")}
      {activeTab === 'assists' && renderLeadersTable(assistsLeaders, "Assists")}
    </div>
  );
};

export default Players;
