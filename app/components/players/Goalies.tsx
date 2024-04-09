// /app/components/players/Goalies.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Goalie } from '@/interfaces/Goalies';
import Skeleton from '../utilities/Skeleton'; // Assuming the path is correct

interface Props {
  goalies: Goalie[];
}

const Goalies: React.FC<Props> = ({ goalies }) => {
  // Sort goalies by creating a new array to avoid direct mutation
  const sortedGoalies = [...goalies].sort((a, b) => b.gamesPlayed - a.gamesPlayed);

  // Check if there are no goalies to display
  if (goalies.length === 0) {
    return <Skeleton />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra-zebra">
        <thead>
          <tr>
            <th>Goalie</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>OT</th>
            <th>SA</th>
            <th>GA</th>
            <th>SV</th>
            <th>SV%</th>
            <th>GAA</th>
            <th>SO</th>
          </tr>
        </thead>
        <tbody>
          {sortedGoalies.map((goalie) => (
            <tr key={goalie.playerId} className="hover:bg-secondary">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <Link href={`/goalie/${goalie.playerId}`}>
                        <Image
                          src={goalie.headshot}
                          alt={`${goalie.firstName.default} ${goalie.lastName.default}`}
                          width={500} 
                          height={300}
                          layout="responsive"
                          unoptimized={true}
                          className="rounded-full"
                        />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href={`/goalie/${goalie.playerId}`}>
                      {`${goalie.firstName.default} ${goalie.lastName.default}`}
                    </Link>
                  </div>
                </div>
              </td>
              <td>{goalie.gamesPlayed}</td>
              <td>{goalie.wins}</td>
              <td>{goalie.losses}</td>
              <td>{goalie.overtimeLosses}</td>
              <td>{goalie.shotsAgainst}</td>
              <td>{goalie.goalsAgainst}</td>
              <td>{goalie.saves}</td>
              <td>{goalie.savePercentage.toFixed(3)}</td>
              <td>{goalie.goalsAgainstAverage.toFixed(2)}</td>
              <td>{goalie.shutouts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goalies;
